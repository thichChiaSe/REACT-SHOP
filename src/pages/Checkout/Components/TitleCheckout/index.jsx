import React from "react";
import Desc from "../../../../components/Desc/index";
import TitleSection from "../../../../components/TitleSection/index";
function TitleCheckOut({ title, desc }) {
  return (
    <div className="textbox">
      <TitleSection>{title}</TitleSection>
      <Desc style="font-family: $o;
    font-size: 12px;
    color: #A9A9A9;
    margin-bottom: 32px;">
        {desc}
      </Desc>
    </div>
  );
}

export default TitleCheckOut;