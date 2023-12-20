
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register=()=>{
    // for useNaviagte():-
    const navigate1=useNavigate();
    // Using controlled components.
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[repass,setRepass]=useState("");
    const handleEmail=(event)=>{
        setEmail(event.target.value);
        // localStorage.setItem("Email",JSON.stringify(email));
    }
    const handlePass=(event)=>{
        setPass(event.target.value);
        // localStorage.setItem("Pass",JSON.stringify(pass));
    }
    const handleRepass=(event)=>{
        setRepass(event.target.value);
        // localStorage.setItem("Repass",JSON.stringify(repass));
    }
    var arr=JSON.parse(localStorage.getItem("Check"));
    if(arr==null){
         arr=[];
    }
    const handleSubmit=()=>{
        if(pass===repass){
            // localStorage.setItem("Email",JSON.stringify(email));
            // localStorage.setItem("Pass",JSON.stringify(pass));
            // No need to store Repass.
            // localStorage.setItem("Repass",JSON.stringify(repass));
            var obj={
                Email:email,
                Password:pass
            }
            arr.push(obj)
            localStorage.setItem("Check",JSON.stringify(arr));
            navigate1("/");
        }
        else{
            alert("Passwords do not match");
        }
    }
    return(
        <>
             <h1 style={{textAlign:"center",backgroundColor:"burlywood"}}>SHOPPING CART HUB</h1>
            <div style={{display:"flex",justifyContent:"center",alignContent:"center",padding:"60px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"60px",border:"1px solid black",width:"fit-content",height:"fit-content"}}>
            <form>
            <legend ><h3 style={{textAlign:"center",color:"red"}}>Register</h3></legend>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmail}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" id="pwd" value={pass} onChange={handlePass}/>
                </div>
                <div className="form-group">
                    <label>Re-enter Password:</label>
                    <input type="password" className="form-control" id="pwd" value={repass} onChange={handleRepass}/>
                </div>
                <button type="button" className="btn btn-default" style={{backgroundColor:"lightblue"}} onClick={handleSubmit}>Register</button>
            </form>
            </div>
            </div>
        </>
    )
}
export default Register