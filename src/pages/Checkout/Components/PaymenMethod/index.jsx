import React, { useState } from "react";
import { IconBitcoin, IconPaypal, IconVisa } from "../../../../components/Icons/index";
import TextFields from "../../../../components/Textfields";
// import TextField from "../../../Checkout/Components/Textfield/index";
import "../PaymenMethod/style.scss"
import TitleCheckOut from "../TitleCheckout";

function PaymentMethod() {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isOke,setIsOk] =useState(false);
  return (
    <section className="payment">
      <TitleCheckOut
        title="Payment method"
        desc="Please enter your payment method"
      />
      <div className="form-wrapper">
        <form onSubmit>
          <div className="form__dropdown">
            <div className="form__dropdown-select">
              <TextFields
                typeInput="radio"
                companyName="Credit card"
                plus="as"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconVisa />}

                onClick={(e) => setIsActive(!isActive)}
              />
            </div>
            {isActive && (
              <div className="form__dropdown-list">
                <div className="form__dropdown-row">
                  <div className="form__dropdown-item">
                    <TextFields label="Card number" placeholder="Card number" />
                  </div>
                </div>
                <div className="form__dropdown-row --flex">
                  <div className="left">
                    <div className="form__dropdown-item">
                      <TextFields
                        label="Card number"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                  <div className="right --flex">
                    <div className="form__dropdown-item">
                      <TextFields
                        label="Card number"
                        placeholder="Card number"
                      />
                    </div>
                    <div className="form__dropdown-item">
                      <TextFields
                        label="Card number"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="form__dropdown">
            <div className="form__dropdown-select">
            <TextFields
                typeInput="radio"
                companyName="Paypal"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconPaypal />}
                onClick={(e) => setIsActive1(!isActive1)}
              />
            </div>
            {isActive1&& (<div className="form__dropdown-list">
              <div className="form__dropdown-row">
                <div className="form__dropdown-item">
                  <TextFields label="Card number" placeholder="Card number" />
                </div>
              </div>
              <div className="form__dropdown-row --flex">
                <div className="left">
                  <div className="form__dropdown-item">
                    <TextFields label="Card number" placeholder="Card number" />
                  </div>
                </div>
                <div className="right --flex">
                  <div className="form__dropdown-item">
                    <TextFields label="Card number" placeholder="Card number" />
                  </div>
                  <div className="form__dropdown-item">
                    <TextFields label="Card number" placeholder="Card number" />
                  </div>
                </div>
              </div>
            </div>)}
          </div>
          <div className="form__dropdown">
            <div className="form__dropdown-select">
            <TextFields
                onChange={()=>{if(isOke==false){setIsOk(true)}else{setIsOk(false)}}}
                typeInput="radio"
                companyName="Bitcoin"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconBitcoin />}
                onClick={(e) => setIsActive2(!isActive2)}
              />
            {isActive2&&(<div className="form__dropdown-list">
              <div className="form__dropdown-row">
                <div className="form__dropdown-item">
                  <TextFields label="Card number" placeholder="Card number" />
                </div>
              </div>
              <div className="form__dropdown-row --flex">
                <div className="left">
                  <div className="form__dropdown-item">
                    <TextFields label="Card number" placeholder="Card number" />
                  </div>
                </div>
                <div className="right --flex">
                  <div className="form__dropdown-item">
                    <TextFields label="Expiration date" placeholder="DD/MM/YY" />
                  </div>
                  <div className="form__dropdown-item">
                    <TextFields label="CVC" placeholder="CVC" />
                  </div>
                </div>
              </div>
            </div>)}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PaymentMethod;