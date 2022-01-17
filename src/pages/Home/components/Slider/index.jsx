import React from "react";
import "./style.scss";
import SliderItem from "./SliderItem";
import OurSay from "./OurCustomSay";
import Flickity from "react-flickity-component";
import "../../../../assets/css/libs.scss";
export const Slider = () => {
  // const sliderlist = [
  //     "Nguyen Van A","Nguyen Van A","Nguyen Van A","Nguyen Van A","Nguyen Van A"
  // ];
  const flickityOptions = {
    initialIndex: 2,
    pageDots: false,
    wrapAround: true
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
              title="Lorem asdasd asdasdasdggg qwedasczxd asdasdasd "
              item="Co van toi cao"
            />
            <SliderItem
              title="Lorem asdasd asdasdasd 123123123123 qwedasczxd asdasdasd "
              item="Quoc Su"
            />
            <SliderItem
              title="Lorem asdasd asdasdasd asdasdsaqeweq qwedasczxd asdasdasd "
              item="TigerCali"
            />
            <SliderItem
              title="Lorem asdasd "
              item="Tran Dan"
            />
          </Flickity>
        </div>
      </div>
    </div>
  );
};
export default Slider;
