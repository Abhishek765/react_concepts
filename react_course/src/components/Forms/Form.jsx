import React, { useState } from 'react'
import './Form.css'
const Form = () => {

    const [user, setUser] = useState({
        fname: "",
        Lname: "",
        email: ""
    })
    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...user, id: new Date().getTime().toString() };

        setRecords([...records, newRecord]);
        console.log(records);
        setUser({ fname: "", Lname: "", email: "" });
    }



    return (
        <div>
            <form className="Form_field" onSubmit={handleSubmit}>

                <input className="inputField" name="fname" placeholder="Enter your name" type="text" onChange={handleInput} value={user.fname} autoComplete="new-password"
                />
                <input className="inputField" name="Lname" placeholder="Enter your LastName" type="text" onChange={handleInput} value={user.Lname} autoComplete="new-password"
                />
                <input className="inputField" name="email" placeholder="Enter your Email" type="text" onChange={handleInput} value={user.email} autoComplete="new-password"
                />
                <button className="btnStyle" type="submit">Register</button>
            </form>

            <div>
                {
                    records.map((currRecord) => {
                        {/* Object Destructing */ }
                        const { id, fname, Lname, email } = currRecord;
                        return (
                            <div className="showDataStyle" key={id}>
                                <p>{fname}</p>
                                <p>{Lname}</p>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form;
