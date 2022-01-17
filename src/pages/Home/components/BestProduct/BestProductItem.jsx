import react from "react";
export default function BestProductItem({title,item}){
   const element = item.map((e)=>{
    return (
        <a href="">{e}</a>
    )
   })
    return(
       <div className="best__product-item">
           <h3>{title}</h3>
           <div className="tags">
               {element}
               </div>
       </div>
    );
}