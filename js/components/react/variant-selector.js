import React, { useEffect, useState } from "react";
import OnetimeOptions from "./onetime-options";
import SubscriptionOptions from "./subscription-options";
import VariantOptions from "./variant-options";
import FrequencyOptions from "./frequency-options";
// import 'StyleComponents/variant-options.scss';
// import 'StyleComponents/subscription-sec.scss';

export default ({ data: shopifyData }) => {
  const [purchaseType, setPurchaseType] = useState('onetime');
  const { variants, sellingplan, options } = shopifyData
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [selectedSellingPlan, setselectedSellingPlan] = useState(sellingplan[0]);

  const handleSwitch = (purchaseType) => {
    setPurchaseType(purchaseType);
  }

  const handleVariantChange = (obj) => {
    setSelectedVariant({ ...obj });
  }

  const updateSellingPlan = (sellingPlanObj) => {
    setselectedSellingPlan({ ...sellingPlanObj })
  }

  const updateInputValues = (inputs, value) => {
    inputs.forEach(input => {
      if(input.closest('[data-product-form]')) {
      input.value = value;
      }
    })
  }

  useEffect(() => {
    //since product-form custom element code is compiled and is not set to initialise on connected callback
    //we are simply updating the input values in the existing product form
    const variantInputs = document.querySelectorAll('input[name="id"]');
    const sellingPlanInputs = document.querySelectorAll('input[name="selling_plan"]');
    updateInputValues(variantInputs, selectedVariant.id);
    //update sellingplan id forsubscription purchase
    if (purchaseType == "subscription") {
      updateInputValues(sellingPlanInputs, selectedSellingPlan.id);
    }
    else {
      updateInputValues(sellingPlanInputs, '');
    }

    const priceContainer = document.querySelector('.product-price__current-price');
    if (priceContainer){
      priceContainer.innerHTML = selectedVariant.price
    }
  }, [selectedVariant, purchaseType, selectedSellingPlan])

  return (
    <>
      {sellingplan.length > 0 &&
        <>
          <div className="variant-container__purchaseType-label variant-container__opt-label">Buying Options</div>
          <div className="variant-container__purchaseType-wrapper">
            <OnetimeOptions selectedVariant={selectedVariant} purchaseType={purchaseType} onUpdate={handleSwitch} />
            <SubscriptionOptions selectedVariant={selectedVariant} purchaseType={purchaseType} selectedSellingPlan={selectedSellingPlan} onUpdate={handleSwitch} />
          </div>
        </>
      }
      {variants.length > 1 && <VariantOptions variants={variants} sellingplan={sellingplan} selectedVariant={selectedVariant} onUpdate={handleVariantChange} options={options} selectedSellingPlan={selectedSellingPlan} purchaseType={purchaseType}  />}
      {purchaseType != "onetime" && <FrequencyOptions sellingplan={sellingplan} selectedSellingPlan={selectedSellingPlan} onUpdate={updateSellingPlan} />}
    </>
  );
}