import react from "react";
export default function BestFarmerItem({title,item}){
   const element = item.map((e)=>{
    return (
        <a href="">{e}</a>
    )
   })
    return(
       <div className="best__farmer-item">
           <h3>{title}</h3>
           <div className="tags">
               {element}
               </div>
       </div>
    );
}