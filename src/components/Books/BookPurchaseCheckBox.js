import React from 'react'

const BookPurchaseCheckBox = (props) => {
    return (
        <div>
            <label >Purchased?: </label><br></br> 
            <input 
            type="checkbox" 
            name="completed" 
            id="completed"
            onChange={props.handleOnChangeCheckBoxPurchased}
            /><br></br>
        </div>
    )
}

export default BookPurchaseCheckBox;
