


const SeeMore=()=>{
    const data=JSON.parse(localStorage.getItem("Seemore"));
    // console.log(data)
    if(data==null){
        data={};
    }
    return(
        <>
            {
                Object.keys(data).length>0?
                <>
                <h1 style={{textAlign:"center",color:"red"}}>Product Details</h1>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{border:"2px solid black",width:"fit-content"}}>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px"}}>
                            <img src={data.image} style={{width:"150px",height:"150px"}} alt={data.title} />
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <ul>
                                <li>ID: {data.id}</li>
                                <li>Title: {data.title}</li>
                                <li>Price: ${data.price}</li>
                                <li>Category: {data.category}</li>
                                <li>Rating: {data.rating.rate}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </>
                :
                <h3>No product</h3>
            }
        </>
    )
}
export default SeeMore