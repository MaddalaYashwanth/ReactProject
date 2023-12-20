import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Home=()=>{
    const[Products,setProducts]=useState([]);
    const navigate3=useNavigate();
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{setProducts(res.data)})
        .catch((res)=>{console.error(res)})
    },[])
    const handleproduct=(val)=>{
        // console.log(val);
        var obj1=val;
        if(obj1==null){
            obj1={};
        }
        localStorage.setItem("Seemore",JSON.stringify(obj1))
        // console.log(obj1);
        navigate3("/seemore");
    }
    return(
        <>
            {/* <h1 style={{textAlign:"center"}}>Home Screen</h1> */}
            <h1 style={{textAlign:"center",backgroundColor:"chartreuse"}}>SHOPPING CART HUB</h1>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",gap:"30px"}}>
            {
                Products.map((val)=>{
                    return(
                       
                            <div className="card"  style={{ width:"400px",margin:"20px",padding:"20px" }}>
                            <img className="card-img-top" src={val.image} alt="Card image" style={{width:"150px",height:"150px"}} />
                            <div className="card-body">
                                <h4 className="card-title">{val.title}</h4>
                                <p className="card-text">{val.description}</p>
                                <button onClick={()=>{handleproduct(val)}}>See More</button>
                            </div>
                            </div>
                        
                    ) 
                })
            }
            </div>

        </>
    )
}
export default Home
