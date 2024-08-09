import React, { useState, useEffect } from "react";
// import 'StyleComponents/subscription-sec.scss';

const SubscriptionContainer = ({ data = [], handleSwitch = () => {}, inputSwitch = "" }) => {

    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const initialOption = data[0];
            setSubscription(initialOption);
        }
    }, [data]);

    useEffect(() => {
        const selectedPlanIdInputs = document.querySelectorAll('.selected-selling-plan-id');
        selectedPlanIdInputs.forEach(input => {
            input.value = inputSwitch === 'subscription' ? subscription.id : '';
        });
    }, [subscription, inputSwitch]);

    const calculateDiscountedPrice = (offerType, price, percentage) => {
        const numericPrice = parseFloat(price.split("$")[1]);
        const flatRate = (percentage / 100);

        if (offerType == 'percentage') {
            const discountedPrice = numericPrice * (1 - percentage / 100);
            return discountedPrice.toFixed(2);
        } else if (offerType == 'fixed_amount') {
            const fixedAmt = (numericPrice - flatRate);
            return fixedAmt;
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

    const handleSelectChange = (event) => {
        const selectedOptionObject = data.find(item => item.id === event.target.value);
        setSubscription(selectedOptionObject);
    };


    return (
        <div className="subscription-container">
            <div className="subscription-container__value-crossBtn">
                <p className="subscription-container__value-tag">Best value</p>
            </div>
            <div className="subscription-container__subs-one-wrapper">
                <div className="subscription-container__subscription-wrapper">
                    <div className="subscription-container__subs-text">
                        <input type="radio" id="subscribeSave" name="purchase" value="subscription" onChange={handleSwitch} checked={inputSwitch === 'subscription'}/>
                        <label htmlFor="subscribeSave">
                        {subscription && (
                            <>
                            <span className="subscribeSave__text">SUBSCRIBE & SAVE {calculateOffer(subscription.priceAdjustments,subscription.price[0].variantPrice, subscription.offerPercentage)}</span>
                            {data.length > 1 ? (
                                <div className="subscription-container__dropdown">
                                    <select name="delivery" id="interval" className="subscription-container__dropbtn" defaultValue="" onChange={handleSelectChange}>
                                        {data && data.map((item, index) => (
                                            <option key={index} value={item.id}>{item.options}</option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <div className="subscription-container__dropdown">
                                    {data && data.map((item, index) => (
                                        <p className="subscription-container__dropbtn-single" key={index} value={item.id}>{item.options}</p>
                                    ))}
                                </div>
                            )}
                            </>
                        )}
                        </label>
                    </div>
                    <div className="subscription-container__subs-price">
                        {subscription && (
                            <>
                                <p className="subscription-container__subs-compPrice">
                                    <span style={{color: 'black', textDecoration: 'line-through', textDecorationColor: 'var(--gsc-button-background-color-100)'}}>
                                    {subscription.price[0].variantPrice}
                                    </span>
                                </p>
                                <p className="subscription-container__subs-actualPrice">
                                    ${calculateDiscountedPrice(subscription.priceAdjustments, subscription.price[0].variantPrice, subscription.offerPercentage)}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionContainer;