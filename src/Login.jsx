import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    
    const ProceedLogin = (e) => {
        e.preventDefault()
        if(Validate()){
        }
    }


    const Validate = () => {
        if(email === '' || password === '') {
            toast('Please Enter email and password')
        }
        else{
            toast('Login Successfully')
        }
    }
    return (
        <>
        <h1 style={{textAlign:"center"}}>Login</h1>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit={ProceedLogin} className="container" style={{margin: "2px"}}>
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email <span className="errmsg">*</span></label>
                                <input className="form-control" value={email} onChange={e=>{setemail(e.target.value)}}></input>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Password<span className="errmsg">*</span></label>
                                <input className="form-control" value={password} onChange={e=>{setPassword(e.target.value)}}></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                            {/* <Link to={'/register'} className="btn btn-danger">New User</Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login