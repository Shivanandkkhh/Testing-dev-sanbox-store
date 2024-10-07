import React, { useState, useEffect } from "react";
// import "StyleComponents/subscription-sec.scss";

const SubscriptionOptions = ({ selectedVariant, selectedSellingPlan, onUpdate, purchaseType }) => {
  const {price,priceWithoutCurrency} = selectedVariant;
  const {priceAdjustments, discount} = selectedSellingPlan;  
  const discountNum = parseFloat(discount);
  const numPriceWithoutCurrency  = parseFloat(price.replace('$','').replace(',','')) || 0;

  const numPrice = parseFloat(price.replace('$', '')).toFixed(2) || 0;

  const calculateDiscountedPrice = (offerType = "") => {
    if (offerType == 'percentage') {
        const discountedPrice = numPriceWithoutCurrency * (1 - discountNum / 100);
        return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
        const fixedAmt = (numPriceWithoutCurrency - flatRate);
        return fixedAmt.toFixed(2);
    } else if (offerType == 'price') {
        return flatRate.toFixed(2);
    }
  };

  const calculateOffer = (offerType) => {
    if (offerType === "percentage" ) {
        return `${discountNum}%`;
    } else if (offerType === "fixed_amount" ) {
        const newFixedAmountValue = discountNum/100;
        return `$${newFixedAmountValue.toFixed(2)}`;
    } else if (offerType === "price") {
        const newValue  = numPriceWithoutCurrency - (discountNum/100);
        return `$${newValue.toFixed(2)}`;
    }
  };


  return (
    <>
      <div className={`subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ${purchaseType != 'onetime' ? 'active' : ''}`} onClick={() => {onUpdate("subscription")}}>    
        <div className="subscriptionOpt-container__subscription-label">
           Subscribe {discount > 0 && "& Save"}&nbsp; {discount > 0 && calculateOffer(priceAdjustments)} 
        </div>
        <p className="subscriptionOpt-container__subscription-Price"> 
         {calculateDiscountedPrice(priceAdjustments) < numPrice && (
            <span className="sub-compare-at-price">${numPrice}</span>
          )}&nbsp;${calculateDiscountedPrice(priceAdjustments)}</p> 
      </div>
    </>
  );
};

export default SubscriptionOptions;