import './Request.css';
import Keys from './Keys';
import Data from './Data';
import React from 'react';
import axios from 'axios';
import Headers from './Headers';
import ReactJson from 'react-json-view'

function Request() {

    let [isKey, setKey] = React.useState(false);

    let [isData, setData] = React.useState(false);
    let [isClick, setClick] = React.useState(false);
    let [response, setRes] = React.useState({});

    let data = {};
    let headers = {};

    function set() {
        if (!isKey) {
            setKey(true);
            setData(false);
            setClick(false)
        } else {
            setKey(false);
        }
    }

    function set2() {
        if (!isData) {
            setData(true);
            setKey(false);
            setClick(false);
        } else {
            setData(false);
        }
    }

    function submit(string) {
        let index = document.querySelector('input.form-control').value.indexOf('?')
        if (index == -1) {
            document.querySelector('input.form-control').value += string;
        } else {
            document.querySelector('input.form-control').value = document.querySelector('input.form-control').value.substring(0, index) + string;
        }
    }

    function submitData(datanew) {
        data = datanew;
    }

    function submitHeaders(newdata) {
        headers = newdata;
    }

    function send() {
        let url = document.getElementById('url').value;
        let method = document.querySelector('select').value;

        var options = {
            method: method,
            url: url,
            data: data,
            headers: headers
        }
        console.log(JSON.stringify(options));

        fetch('/req', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(options)
        }).then((res) => {
            res.json().then((json) => setRes(JSON.parse(json).data))
        })
        
    }

    function set3() {
        if (isClick) {
            setClick(false)
        } else {
            setClick(true)
            setData(false)
            setKey(false)
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <div class="api">
                <select className="requests">
                    <option value="get">GET</option>
                    <option value="post">POST</option>
                    <option value="put">PUT</option>
                    <option value="delete">DELETE</option>
                    <option value="patch">PATCH</option>
                </select>
                <input id="url" type="url" className="form-control" style={{height: '32px', width: '45%', display: 'inline', borderRadius: '0'}}/>
                <button type="button" className="btn btn-primary" style={{marginLeft: '47px', padding: '2px 10px', position: 'relative', bottom: '2.5px', borderRadius: '3px'}} onClick={send}>Send</button>
            </div>
            <div style={{textAlign: 'center', display: 'inline-block', width: '20%',  marginLeft: '-5%'}}>
                <button onClick={set} type="button" className="btn btn-primary" style={{padding: '2px 10px', borderRadius: '3px', marginTop: '30px'}}>Show Keys</button>
            </div>
            <div style={{textAlign: 'center', display: 'inline-block', width: '20%',  marginLeft: '-10%'}}>
                <button onClick={set2} type="button" className="btn btn-primary" style={{padding: '2px 10px', borderRadius: '3px', marginTop: '30px'}}>Show Data</button> 
            </div>
            <div style={{textAlign: 'center', display: 'inline-block', width: '20%', marginLeft: '-10%'}}>
                <button onClick={set3} type="button" className="btn btn-primary" style={{padding: '2px 10px', borderRadius: '3px', marginTop: '30px'}}>Show headers</button>
            </div>
            <div style={{textAlign: 'center', width: '55%', marginRight: '20%', marginLeft: '20%'}}>
                {!isKey ? null : <Keys submit={submit} set={set}/>}
                {!isData ? null : <Data submit={submitData} set={set2}/>}
                {!isClick ? null : <Headers set={set3} submit={submitHeaders}/>}
            </div>
            
            <div style={{textAlign: 'left', marginTop: '60px'}}>
                <h5 style={{color: 'gray'}}>Response</h5>
                <div style={{height: '300px', overflow: 'scroll', borderTop: '1px solid #343a40'}}>
                    <ReactJson src={response}/>
                </div>
            </div>
        </div>
    )
}

export default Request;