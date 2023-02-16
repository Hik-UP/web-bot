import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";


function Register() {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();

    function loginUser(e){
        e.preventDefault()
        console.log(password)
        console.log(email)
        axios.post('https://dev-hikup.westeurope.cloudapp.azure.com/api/auth/signup',{ name: name, lstName: lastname, username: username, email: email, password: password })
        .then(res => {
            console.log(res)
            if(res?.status === 200) {
                navigate("/login");
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
                    <label for="exampleInputUsername1"><div style={{color:"red",display: "inline-block"}}>*</div>username</label>
                    <input onChange={(e)=>setUsername(e.target.value)} type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter a username"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"><div style={{color:"red",display: "inline-block"}}>*</div>Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1"><div style={{color:"red",display: "inline-block"}}>*</div>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter a password"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input onChange={(e)=>setLastname(e.target.value)} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter a name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">lastname</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputLastname1" aria-describedby="lastnameHelp" placeholder="Enter a lastname"/>
                </div>
                <button onClick={(e)=>loginUser(e)} type="submit" class="btn btn-primary">Submit</button>
            </form>
            <Footer/>
        </>
    )
}

export { Register };