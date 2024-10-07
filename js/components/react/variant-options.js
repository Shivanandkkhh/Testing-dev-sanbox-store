import React from "react";
// import 'StyleComponents/variant-options.scss';

export default ({ variants, selectedVariant, onUpdate, options, selectedSellingPlan, purchaseType }) => {
  const [optionName] = Object.keys(options);
  const { discount } = selectedSellingPlan || {};
  const calculateDiscountPrice = (price, discount) => {
    if (discount && purchaseType == "subscription") {
      return price - (price * discount / 100);
    }
    else return price
  };

  return (
    <>
      {/* <div className="variant-container__opt-label">{optionName}</div> */}
      
    </>
  );
};



