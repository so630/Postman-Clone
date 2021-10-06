import './Selections.css';

function Selection(props) {

    function set(event) {
        props.set();
    }

    return (
        <div style={{textAlign: 'left', marginLeft: '44%', marginTop: '30px'}}>
            <p><span onClick={set}>Keys</span> | <span onClick={props.set2}>Data</span> | <span onClick={props.set3}>Headers</span></p>
        </div>
    )
}

export default Selection;