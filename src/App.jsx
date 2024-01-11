import { useState } from "react";
import AddForm from "./AddForm";
import UsersList from "./UsersList";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: 'John',
      age: 24
    },
    {
      id: "2",
      name: 'Kevin',
      age: 25
    },
    {
      id: "3",
      name: 'Rasika',
      age: 44
    }
  ])

  function addUser(name, age){
    setUsers([...users, {id: crypto.randomUUID(),name,age}])
    }
  return (
   <>
      <h1>App</h1>
      <AddForm 
      users={users}
      addUser={addUser}
      />
      <UsersList users={users}/>
   </>
  )
}