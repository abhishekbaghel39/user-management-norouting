export default function UsersList({ users }) {
        return <div>
        {users.map((user)=>{
            return <div key={user.id}>
                 <h3>{user.name}</h3>
                 <h4>{user.age}</h4>
            </div>
        })

        }
    </div>
}
    
