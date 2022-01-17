import react from "react";
export default function CategoryMenuItem({title,item}){
   const element = item.map((e)=>{
    return (
        <a href="">{e}</a>
    )
   })
    return(
       <div className="cate__menu-item">
           <h3>{title}</h3>
           <div className="tags">
               {element}
               </div>
       </div>
    );
}