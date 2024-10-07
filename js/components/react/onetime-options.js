import React from "react";

const OnetimeOptions = ({ selectedVariant, onUpdate, purchaseType }) => {
  const { price, compareAtPrice, OriginalCompareAtPrice } = selectedVariant;
  // Remove dollar signs and parse the values to floats
  const numPriceWithoutCurrency = parseFloat(price.replace('$', '')) || 0;
  const compareAtPriceWithoutCurrency = parseFloat(compareAtPrice.replace('$', '')) || 0;
  const OriginalComparePrice = parseFloat(OriginalCompareAtPrice.replace('$', '')) || 0;
  const showDiscountedPrice = compareAtPriceWithoutCurrency > numPriceWithoutCurrency;

  let finalCompareAtPrice = compareAtPrice;

  if(!showDiscountedPrice){
    finalCompareAtPrice = OriginalCompareAtPrice;
  }
  
  return (
    <>
      <div className={`onetime-container__onetime-wrapper variant-container__var-wrapper ${purchaseType === 'onetime' ? 'active' : ''}`} onClick={() => { onUpdate("onetime") }}>
        <div className="onetime-container__onetime-label">One-time Purchase</div>
        <p className="onetime-container__oneTime-Price">
    
            <span className="sub-compare-at-price">{finalCompareAtPrice}</span>
          
          &nbsp;{price}
        </p>
      </div>
    </>
  );
};

export default OnetimeOptions;
