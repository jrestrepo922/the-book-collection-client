import React from 'react'

const CheckBoxUnchecked = (props) => {
    return (
        <div>
        <div>
            <label >Finish: </label><br></br> 
            <input 
            type="checkbox" 
            name="completed" 
            id="completed"
            onChange={props.handleOnChangeCheckBox}
            /><br></br>
        </div>
        </div>
    )
}

export default CheckBoxUnchecked