import React from "react";
import "./style.scss";
import SliderItem from "./SliderItem";
import OurSay from "./OurCustomSay";
import Flickity from "react-flickity-component";
import "../../../../assets/css/libs.scss";
import TigerTran from "../../../../assets/img/trandan.png";
import Avatar1 from "../../../../assets/img/avataritems.png";
import Cat from "../../../../assets/img/mewmew.png";
import Avatar2 from "../../../../assets/img/avatar2slider.png";
export const Slider = () => {
  // const sliderlist = [
  //     "Nguyen Van A","Nguyen Van A","Nguyen Van A","Nguyen Van A","Nguyen Van A"
  // ];
  const flickityOptions = {
    initialIndex: 2,
    pageDots: false,
    wrapAround: true,
    autoPlay: 1500,
  };
  return (
    <div className="slider">
      <div className="container-fluid">
        <OurSay />
        <div className="sliders__list-item">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <SliderItem
              title=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here "
              item="Jane Wick"
              imgs={Avatar1}
            />
            <SliderItem
              title=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here "
              item="John Cena"
              imgs={Avatar2}
            />
            <SliderItem
              title=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here "
              item="Tiger Cali"
              imgs={TigerTran}
            />
            <SliderItem
              title=" This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here 'test fillllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'"
              item="Boss"
              imgs={Cat}
            />
          </Flickity>
        </div>
      </div>
    </div>
  );
};
export default Slider;
