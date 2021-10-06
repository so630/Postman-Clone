import React from 'react';
import './Data.css'

function Data(props) {

    let [data, update] = React.useState({});
    let [count, updateCount] = React.useState([1]);

    function handleChange() {
        let rows = document.querySelectorAll('#Table2 tr')
        rows = Array(rows);
        rows.map((row) => {
            console.log(row.length)
            let temporaryObj = {}
            row.forEach((row) => {
                let key = row.childNodes[0].childNodes[0].value;
                let value = row.childNodes[1].childNodes[0].value;
                if (key == '' || value == '') return;
                temporaryObj[key] = value;
            })

            update(temporaryObj);
            props.submit(temporaryObj);
        })
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
        props.submit(data)
    }

    return (
        <div>
            <table border="1" width="100%" ID="Table2" style={{marginTop: '20px', fontFamily: 'Montserrat'}}>
                <th className="fifty">
                    Key
                </th>
                <th>
                    Values
                </th>
                {count.map((key, index) => {
                    console.log(key)
                    return <Dat id={index} handleChange={handleChange}/>
                })}
                {console.log(data)}
                
            </table>
            <div style={{textAlign: 'right', marginTop: '10px'}}>
                <button name="delete" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right', marginRight: '5px'}} onClick={handleClick}>Delete Data</button>
                <button name="add" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right'}} onClick={handleClick}>Add Data</button>
                <div style={{textAlign: 'left'}}>
                    <button name="add" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right'}} onClick={props.set}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

function Dat(props) {
    return (
        <tr>
            <td><input name={"key" + props.id} type="text" style={{border: 'none', width: '100%'}} autoComplete="off" onChange={props.handleChange}></input></td>
            <td><input name={"value" + props.id} type="text" style={{border: 'none', width: '100%'}} autoComplete="off" onChange={props.handleChange}></input></td>
        </tr>
    )
}

export default Data;