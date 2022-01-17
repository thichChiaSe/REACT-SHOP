import React, { useState } from "react";
import { IconBitcoin, IconPaypal, IconVisa } from "../../../../components/Icons/index";
import TextFields from "../../../../components/Textfields";
// import TextField from "../../../Checkout/Components/Textfield/index";
import "../PaymenMethod/style.scss"
import TitleCheckOut from "../TitleCheckout";

function PaymentMethod() {
  const [isActive, setIsActive] = useState(false);
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
                companyName="Credit card"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconPaypal />}
                onClick={(e) => setIsActive(!isActive)}
              />
            </div>
            <div className="form__dropdown-list">
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
            </div>
          </div>
          <div className="form__dropdown">
            <div className="form__dropdown-select">
            <TextFields
                typeInput="radio"
                companyName="Credit card"
                type="icon-right"
                flex
                wFit="fit"
                icon={<IconBitcoin />}
              />
            </div>
            <div className="form__dropdown-list">
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
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PaymentMethod;