import { useState } from "react"

export default function AddForm({ users, addUser }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleOnChangeName(e) {
        setName(e.target.value)
    };

    function handleOnChangeAge(e) {
        setAge(e.target.value)
    };

    function handleOnClick(){
        addUser(name, age)
    }
    return (
        <>
            <div>
            <input 
            type="text" 
            placeholder= "Enter Name" 
            value={name}
            onChange={handleOnChangeName}
            />
            </div>
            <div>
            <input 
            type="number" 
            placeholder= "Age" 
            value={age}
            onChange={handleOnChangeAge}
            />  
            </div>
            <button onClick={handleOnClick}>Add</button>
        </>
    )
}