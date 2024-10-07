import React, { useState, useEffect } from "react";
// import "StyleComponents/subscription-sec.scss";

export default ({ data = [], handleSwitch = () => {}, inputSwitch = "" }) => {

    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const initialOption = data[0];
            setSubscription(initialOption);
        }
    }, [data]);

    return (
        <>
            <div className="subscription-container">
                <div className="subscription-container__onetime-wrapper">
                    <div className="subscription-container__oneTime-text">
                        <input type="radio" id="onetime" name="purchase" className="active" value="onetime" onChange={handleSwitch} checked={inputSwitch === 'onetime'} />
                        <label htmlFor="onetime">ONE TIME PURCHASE </label><br />
                    </div>
                    <p className="subscription-container__oneTime-Price">{subscription && subscription.price[0].variantPrice || ''}</p>
                </div>
            </div>
        </>
    )
}
