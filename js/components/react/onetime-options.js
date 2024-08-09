import React, { useState, useEffect } from "react";
// import 'StyleComponents/variant-options.scss';

const OnetimeOptions = ({ selectedVariant, onUpdate, purchaseType }) => {
  console.log(purchaseType,'purchaseType')
  const {price} = selectedVariant;
     return (
      <>
      <div className={`onetime-container__onetime-wrapper variant-container__var-wrapper ${purchaseType == 'onetime' ? 'active' : '' }`} onClick={() => {onUpdate("onetime")}}>
            <div className="onetime-container__onetime-label">One-time Purchase</div>
            <p className="onetime-container__oneTime-Price">{price}</p>
        </div>
      </>
    );
  };

  export default OnetimeOptions;