import React from 'react'

const CheckBoxChecked = (props) => {
    return (
        <div>
            <label >Finish: </label><br></br> 
            <input 
            type="checkbox" 
            name="completed" 
            id="completed"
            onChange={props.handleOnChangeCheckBox}
            checked
            /><br></br>
        </div>
    )
}

export default CheckBoxChecked; 