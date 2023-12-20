import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



const Home=()=>{
    const[Products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{setProducts(res.data)})
        .catch((res)=>{console.error(res)})
    },[])
    return(
        <>
            {/* <h1 style={{textAlign:"center"}}>Home Screen</h1> */}
            <h1 style={{textAlign:"center",backgroundColor:"chartreuse"}}>SHOPPING CART HUB</h1>
            {
                Products.map((val)=>{
                    return(
                        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",gap:"30px"}}>

                            <div className="card" style={{ width:"400px",margin:"20px",padding:"20px" }}>
                            <img className="card-img-top" src={val.image} alt="Card image" style={{width:"150px",height:"150px"}} />
                            <div className="card-body">
                                <h4 className="card-title">{val.title}</h4>
                                <p className="card-text">{val.description}</p>
                                <a href="#" className="btn btn-primary">
                                See More
                                </a>
                            </div>
                            </div>
                        </div>
                    ) 
                })
            }

        </>
    )
}
export default Home