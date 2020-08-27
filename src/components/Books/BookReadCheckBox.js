import React from 'react'

const BookReadCheckBox = (props) => {
    return (
        <div>
            <label >Finish: </label><br></br> 
            <input 
            type="checkbox" 
            name="completed" 
            id="completed"
            onChange={props.handleOnChangeCheckBoxRead}
            /><br></br>
        </div>
    )
}

export default BookReadCheckBox;
