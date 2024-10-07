import React, { useEffect, useState } from "react";
import OnetimeOptions from "./onetime-options";
import SubscriptionOptions from "./subscription-options";
import VariantOptions from "./variant-options";
import FrequencyOptions from "./frequency-options";
// import 'StyleComponents/variant-options.scss';
// import 'StyleComponents/subscription-sec.scss';

export default ({ data: shopifyData }) => {
  const [purchaseType, setPurchaseType] = useState('onetime');
  const { variants, sellingplan, options, selected } = shopifyData
  const [selectedVariant, setSelectedVariant] = useState(variants.find(variant => variant.id == selected));
  const [selectedSellingPlan, setselectedSellingPlan] = useState(sellingplan[0]|| {});

  
 const updateSelectedVariant = (variantObj) =>{
  const{id} = variantObj;
  const selectedVariant = variants.find(variant => variant.id  == id);
  setSelectedVariant(selectedVariant)
 }

 useEffect(() => {
  const {priceWithoutCurrency} = selectedVariant;
  let price = priceWithoutCurrency?.trim();
  if(purchaseType != "onetime") {
    if(selectedSellingPlan) {
      const {priceAdjustments, discount} = selectedSellingPlan;  
      const discountNum = parseInt(discount);
      const numPriceWithoutCurrency  = parseFloat(priceWithoutCurrency) || 0;
    
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
        price = calculateDiscountedPrice(priceAdjustments)
      }
  }
  document.querySelectorAll('[data-segmented-price]').forEach(priceInput => priceInput.value = price);
 },[selectedVariant, purchaseType])

 window.updateSelectedVariant = updateSelectedVariant;


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
    const sellingFrequencyInput  = document.querySelectorAll('[data-selling-frequency]');
    
    updateInputValues(variantInputs, selectedVariant.id);
    if (purchaseType == "subscription") {
      updateInputValues(sellingPlanInputs, selectedSellingPlan.id);
      updateInputValues(sellingFrequencyInput, selectedSellingPlan.frequency);
    }
    else {
      updateInputValues(sellingPlanInputs, '');
      updateInputValues(sellingFrequencyInput, '');
    }

    const priceContainer = document.querySelector('.product-price__current-price');
    if (priceContainer){
      priceContainer.innerHTML = selectedVariant.price
    }
  }, [selectedVariant, purchaseType, selectedSellingPlan])

  const productOriginalPrice = parseFloat(selectedVariant.price.replace('$', '').replace(',', ''));
  const numProductCompareAtPrice = parseFloat(selectedVariant.compareAtPrice.replace('$', '').replace(',', ''));

  let productComparePrice;

  if( numProductCompareAtPrice > productOriginalPrice ){
    productComparePrice = selectedVariant.compareAtPrice;
  } 
  if(!productComparePrice){
    productComparePrice = selectedVariant.OriginalCompareAtPrice;
  }


  return (
    <>
      {sellingplan.length > 0 ?
        <>
          <div className="variant-container__purchaseType-label variant-container__opt-label">Buying Options</div>
          <div className="variant-container__purchaseType-wrapper">
            <OnetimeOptions selectedVariant={selectedVariant} purchaseType={purchaseType} onUpdate={handleSwitch} />
            {Object.keys(selectedSellingPlan).length > 0 && <SubscriptionOptions selectedVariant={selectedVariant} purchaseType={purchaseType} selectedSellingPlan={selectedSellingPlan} onUpdate={handleSwitch} />}
          </div>
        </>
        :
        <>
          <s> {productComparePrice}</s> <span className={productComparePrice ? "product-sale-color": ""}> {selectedVariant.price} </span> {(productComparePrice && <span className="product-sale-color"></span>)}
        </>
      }
      {purchaseType != "onetime" && <FrequencyOptions sellingplan={sellingplan} selectedSellingPlan={selectedSellingPlan} onUpdate={updateSellingPlan} />}
    </>
  );
}
