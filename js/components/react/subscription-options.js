import React, { useState, useEffect } from "react";
// import "StyleComponents/subscription-sec.scss";

const SubscriptionOptions = ({ selectedVariant, selectedSellingPlan, onUpdate, purchaseType }) => {
  const {price} = selectedVariant;
  const {priceAdjustments, discount} = selectedSellingPlan;  
  const discountNum = parseInt(discount);

  const calculateDiscountedPrice = (offerType = "", price = "", percentage = 0) => {
    const numericPrice = parseFloat(price.split("$")[1]);
    const flatRate = (percentage / 100);

    if (offerType == 'percentage') {
        const discountedPrice = numericPrice * (1 - percentage / 100);
        return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
        const fixedAmt = (numericPrice - flatRate);
        return fixedAmt.toFixed(2);
    } else if (offerType == 'price') {
        return flatRate.toFixed(2);
    }
  };

  const calculateOffer = (offerType, price, offerPercentage) => {
    if (offerType === "percentage" ) {
        return `${offerPercentage}%`;
    } else if (offerType === "fixed_amount" ) {
        const newFixedAmountValue = offerPercentage/100;
        return `$${newFixedAmountValue.toFixed(2)}`;
    } else if (offerType === "price") {
        const numericPrice = parseFloat(price.split("$")[1]);
        const newValue  = numericPrice - (offerPercentage/100);
        return `$${newValue.toFixed(2)}`;
    }
  };


  return (
    <>
      <div className={`subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ${purchaseType != 'onetime' ? 'active' : ''}`} onClick={() => {onUpdate("subscription")}}>    
        <div className="subscriptionOpt-container__subscription-label">Subscribe & Save&nbsp;
        {calculateOffer(priceAdjustments,price,discountNum)}
        </div>
        <p className="subscriptionOpt-container__subscription-Price">${calculateDiscountedPrice(priceAdjustments,price,discountNum)}</p> 
      </div>
    </>
  );
};

export default SubscriptionOptions;