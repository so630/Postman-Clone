import React from 'react';
import './Headers.css'

function Data(props) {

    let [headers, updateHeaders] = React.useState({});
    let [count, updateCount] = React.useState([1]);

    function handlechange() {
        let rows = document.querySelectorAll('#table3 tr')
        rows = Array(rows);
        let temporaryObj;
        rows.map((row) => {
            console.log(row.length)
            temporaryObj = {}
            row.forEach((row) => {
                let key = row.childNodes[0].childNodes[0].value;
                let value = row.childNodes[1].childNodes[0].value;
                if (key == '' || value == '') return;
                temporaryObj[key] = value;
            })

            updateHeaders(temporaryObj);
        })
        props.submit(temporaryObj);
    }

    function handleClick(event) {
        let name = event.target.name;
        if (name == 'add') {
            updateCount(prev => {
                return [...prev, (prev[prev.length-1]+1)]
            })
        } else {
            updateCount(prev => {
                let copy = prev;
                copy.pop();
                return [...copy]
            })
        }
    }

    function submit() {
        props.submit(headers)
    }

    return (
        <div>
            <table border="1" width="96%" ID="table3" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', fontFamily: 'Montserrat'}}>
                <th className="fifty">
                    Key
                </th>
                <th>
                    Values
                </th>
                {count.map((key, index) => {
                    return <Dat id={index} handlechange={handlechange}/>
                })}
                
            </table>
            <div style={{textAlign: 'right', marginTop: '10px', marginRight: '18px'}}>
                <button name="delete" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right', marginRight: '5px'}} onClick={handleClick}>Delete Data</button>
                <button name="add" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right'}} onClick={handleClick}>Add Data</button>
                <div style={{textAlign: 'left', marginLeft: '18px'}}>
                    <button name="add" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right'}} onClick={props.set}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

function Dat(props) {
    return (
        <tr>
            <td><input name={"key" + props.id} type="text" style={{border: 'none', width: '100%'}} autoComplete="off" onChange={props.handlechange}></input></td>
            <td><input name={"value" + props.id} type="text" style={{border: 'none', width: '100%'}} autoComplete="off" onChange={props.handlechange}></input></td>
        </tr>
    )
}

export default Data;