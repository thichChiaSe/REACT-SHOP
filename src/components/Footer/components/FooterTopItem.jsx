import react from "react";

export default function FooterTopItem({title,item}){
   const element = item.map((e)=>{
    return (
        <a href="">{e}</a>
    )
   })
    return(
       <div className="footer__top-item">
           <h3>{title}</h3>
           {element}
       </div>
    );
}