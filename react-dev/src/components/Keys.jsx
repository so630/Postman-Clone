import './Keys.css'
import React from 'react';

function Keys(props) {

    let [keys, update] = React.useState([{}]);

    function handleChange(event) {
        let name = event.target.name.substring(0, 3) == 'key' ? event.target.name.substring(0, 3) : event.target.name.substring(0,5);
        let value = event.target.value;
        let index = event.target.name.substring(0, 3) == 'key' ? event.target.name.substring(3) : event.target.name.substring(5);
        let tmp = [];
        update(prev => {
            prev[index][name] = value;
            tmp = [...prev];
            console.log(tmp)
            let string = '?';
            tmp.map((key, index) => {
                if (!key['value'] || !key['key']) {
                    return [...prev];
                } else if (index == keys.length-1) {
                    string += (key['key'] + '=' + key['value'])
                } else {
                    string += (key['key'] + '=' + key['value'] + '&')
                }
            })

            if (string == '?') {
                return [...prev];
            }
            console.log(string)
            props.submit(string);
            return [...prev]
        })
        
    }

    function handleClick(event) {
        let name = event.target.name;
        if (name == 'add') {
            update(prev => {
                return [...prev, {}]
            })
        } else if (name == 'delete') {


            update(prev => {
                if (prev.length == 1) {
                    return [...prev]
                } else {
                    let arr = prev;
                    arr.pop();
                    return [...arr];
                }
            })
        }
    }

    function submit() {
        let string = '?';
        keys.map((key, index) => {
            if (!key['value'] || !key['key']) {
                return;
            } else if (index == keys.length-1) {
                string += (key['key'] + '=' + key['value'])
            } else {
                string += (key['key'] + '=' + key['value'] + '&')
            }
        })

        if (string == '?') {
            return;
        }

        props.submit(string);
    }

    return (
        <div style={{textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
            <table border="1" width="100%" ID="Table2" style={{marginTop: '20px', fontFamily: 'Montserrat'}}>
                <th className="fifty">
                    Keys
                </th>
                <th>
                    Values
                </th>
                {keys.map((key, index) => {
                    return <Key id={index} handleChange={handleChange}/>
                })}
                
            </table>
            <div style={{textAlign: 'right', marginTop: '10px'}}>
                <button name="delete" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right', marginRight: '5px'}} onClick={handleClick}>Delete Key</button>
                <button name="add" type="button" class="btn btn-dark" style={{padding: '2px 8px', textAlign: 'right'}} onClick={handleClick}>Add Key</button>

            </div>
        </div>
    )
}

function Key(props) {
    return (
        <tr>
            <td><input name={"key" + props.id} type="text" style={{border: 'none', width: '100%'}} autoComplete="off" onChange={props.handleChange}></input></td>
            <td><input name={"value" + props.id} type="text" style={{border: 'none', width: '100%'}} autoComplete="off" onChange={props.handleChange}></input></td>
        </tr>
    )
}

export default Keys;