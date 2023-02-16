import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    let navigate = useNavigate();

    function loginUser(e){
        e.preventDefault()
        axios.post('https://dev-hikup.westeurope.cloudapp.azure.com/api/auth/login',{ password: password, email: email })
        .then(res => {
            console.log(res)
            if(res?.status === 200) {
                navigate("/loggedin");
            }
            else{

            }
        })
        .catch(error=>{
            console.log("y'a une erreur : "+error)
        })
    }

    return(
        <>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1"><div style={{color:"red",display: "inline-block"}}>*</div>Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1"><div style={{color:"red",display: "inline-block"}}>*</div>Password</label>
                    <input  onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button onClick={(e)=>loginUser(e)} type="submit" class="btn btn-primary">Submit</button>
            </form>
            <Footer/>        
        </>
    )
}

export { Login };