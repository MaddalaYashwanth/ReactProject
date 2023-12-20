import { useNavigate } from "react-router-dom";
import { useState } from "react";




const Login=()=>{
    const navigate2=useNavigate();
    const[email2,setEmail]=useState([]);
    const[pass2,setPass]=useState([]);
    const handleEmail=(event)=>{
        setEmail(event.target.value);

    }
    const handlePass=(event)=>{
        setPass(event.target.value);
    }
    const handleLogin=()=>{
        var count=0;
        var obj2={
            Email:email2,
            Password:pass2
        }
        var CheckData=JSON.parse(localStorage.getItem("Check"));
        console.log(CheckData)
        // It is an array with objects which has email and password properties.
        CheckData.forEach((val)=>{
            if((val.Email===obj2.Email) && (val.Password===obj2.Password)){
                        count++
            }
        })
        if(count!==0){
            navigate2("/home");
        }
        else{
            alert("Please check Credentials");
        }
    }
    const handlebtn=()=>{
        navigate2("/register");
    }
    return(
        <>
            <h1 style={{textAlign:"center",backgroundColor:"pink"}}>SHOPPING CART HUB</h1>
            
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"60px",border:"1px solid black",width:"fit-content",height:"fit-content"}}>
                <form>
                        <legend ><h3 style={{textAlign:"center",color:"red"}}>Login</h3></legend>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" id="email" value={email2} onChange={handleEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="pwd" value={pass2} onChange={handlePass}/>
                    </div>
                    <button type="button" className="btn btn-default" style={{backgroundColor:"lightblue"}} onClick={handleLogin}>Login</button>
                    <button type="button" className="btn btn-default" style={{backgroundColor:"lightblue",marginLeft:"10px"}} onClick={handlebtn}>Don't have an account?</button>
                </form>
                </div>
            </div>
        </>
    )
}
export default Login