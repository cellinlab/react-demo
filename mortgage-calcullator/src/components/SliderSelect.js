import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({
  data,
  setData,
}) => {
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: Number(value).toFixed(0),
            downPayment: Number(value * 0.2).toFixed(0),
            loanAmount: Number(value * 0.8).toFixed(0),
          });
        }}
        defaultValue={Number(data.homeValue)}
        min={1000}
        max={bank_limit}
        label="Home Value"
        unit="￥"
        amount={Number(data.homeValue)}
        value={Number(data.homeValue)}
        steps={100}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: Number(value).toFixed(0),
            loanAmount: Number(data.homeValue - value).toFixed(0),
          });
        }}
        defaultValue={Number(data.downPayment)}
        min={0}
        max={Number(data.homeValue)}
        label="Down Payment"
        unit="￥"
        amount={Number(data.downPayment)}
        value={Number(data.downPayment)}
        steps={100}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: Number(value).toFixed(0),
            downPayment: Number(data.homeValue - value).toFixed(0),
          });
        }}
        defaultValue={Number(data.loanAmount)}
        min={0}
        max={Number(data.homeValue)}
        label="Loan Amount"
        unit="￥"
        amount={Number(data.loanAmount)}
        value={Number(data.loanAmount)}
        steps={100}
      />
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: Number(value).toFixed(0),
          });
        }}
        defaultValue={Number(data.interestRate)}
        min={2}
        max={18}
        label="Interest Rate"
        unit="%"
        amount={Number(data.interestRate)}
        value={Number(data.interestRate)}
        steps={0.5}
      />
    </div>
  );
};

export default SliderSelect;
