import React, { useRef, useState } from 'react'
import './Form.css'

// Uncontrolled way using useRefference
const UseReference = () => {

    const luckyName = useRef(null);
    const [showData, setShowData] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("Please enter a Valid Name") : setShowData(true);
    }
    return (
        <div>
            <form className="Form_field" onSubmit={submitHandler}>
                <label htmlFor="LuckyName">Enter your Luckyname</label>
                <input className="inputField" type="text" id="LuckyName" ref={luckyName} />
                <button type="submit">Submit</button>
            </form>

            {showData ? <p>{`Your Lucky name is ${luckyName.current.value}`}</p> : null}
        </div>
    )
}

export default UseReference;
