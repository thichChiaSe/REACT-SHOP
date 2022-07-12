import iconArrowLeftGreen from "../../assets/img/ic-chevron-left-green.svg";
import iconArrowRightGreen from "../../assets/img/ic-chevron-right-green.svg";
import iconArrowLeftWhite from "../../assets/img/ic-chevron-left-white.svg";
import iconArrowRightWhite from "../../assets/img/ic-chevron-right-white.svg";
import iconArrowLeftBlack from "../../assets/img/ic-chevron-left-black.svg";
import iconArrowRightBlack from "../../assets/img/ic-chevron-right-black.svg";
import iconOptionState from "../../assets/img/optionStateCountry.svg";
import imgDHL from "../../assets/img/DHL.svg"
import imgFED from "../../assets/img/FED.svg"
import imgVisa from "../../assets/img/VISA.svg"
import imgPaypal from "../../assets/img/PayPal.svg"
import imgBitcoin from "../../assets/img/Bitcoin.svg"
import productimgsss from "../../assets/img/product.png"

import "./style.scss";
export function Productimg(){
  return(
    <div className="productimgs">
      <img src={productimgsss} alt="" />
    </div>
  )
}
export function IconBitcoin(){
  return(
    <div className="bitcoin">
      <img src={imgBitcoin} alt="" />
    </div>
  )
}
export function IconPaypal(){
  return(
    <div className="paypal">
      <img src={imgPaypal} alt="" />
    </div>
  )
}
export function IconVisa(){
  return(
    <div className="visa">
      <img src={imgVisa} alt="" />
    </div>
  )
}
export function DHL(){
  return(
    <div className="DHL">
      <img src={imgDHL} alt="" />
    </div>
  )
}
export function FED(){
  return(
    <div className="FED">
      <img src={imgFED} alt="" />
    </div>
  )
}
export function GreenLeft() {
  return (
    <div className="ileft">
      <img src={iconArrowLeftGreen} alt="" />
    </div>
  );
}
export function GreenRight() {
  return (
    <div className="iright">
      <img src={iconArrowRightGreen} alt="" />
    </div>
  );
}
export function WhiteLeft() {
    return (
      <div className="ileft">
        <img src={iconArrowLeftWhite} alt="" />
      </div>
    );
  }
export function WhiteRight() {
    return (
      <div className="iright">
        <img src={iconArrowRightWhite} alt="" />
      </div>
    );
  }  
export function BlackLeft() {
    return (
      <div className="ileft">
        <img src={iconArrowLeftBlack} alt="" />
      </div>
    );
  }  
export function BlackRight() {
    return (
      <div className="iright">
        <img src={iconArrowRightBlack} alt="" />
      </div>
    );
  }  
  export function optionState() {
    return (
      <div className="iright">
        <img src={iconOptionState} alt="" />
      </div>
    );
  }  