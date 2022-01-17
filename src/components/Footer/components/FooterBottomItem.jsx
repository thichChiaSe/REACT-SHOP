import react from "react";

export default function FooterBottomItem({title,item}){
   const element = item.map((e)=>{
    return (
        <a href="">{e}</a>
    )
   })
    return(
       <div className="footer__bottom-item">
           <h3>{title}</h3>
           <div className="tags">
               {element}
               </div>
       </div>
    );
}