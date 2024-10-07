import React, { useState } from "react";
// import 'StyleComponents/variant-options.scss';

const FrequencyOptions = ({ sellingplan, selectedSellingPlan, onUpdate }) => {
    console.log('frequency...', sellingplan)
    const extractFrequency = (frequency) => {
        
        let [deliveryText] = frequency.split(',');
        if (!deliveryText) return
        deliveryText = (deliveryText?.toLowerCase()).split("delivery every")[1];
        return deliveryText;
    };
    
    return (
        <>
        <div className="frequency-container__freq-label variant-container__opt-label">Delivery every</div>
            <div className="frequency-container__freq-options variant-container__var-options">
            
            {sellingplan.length && sellingplan.map((sellplan, index) => (
                <div
                    key={index}
                    className={`frequency-container__freq-wrapper variant-container__var-wrapper ${selectedSellingPlan.id === sellplan.id ? 'active' : ''}`}
                    onClick={() => onUpdate(sellplan)}
                >
                    <h5 className="frequency-container__freq-name variant-container__var-name">
                        {extractFrequency(sellplan.frequency)}
                    </h5>
                </div>
            ))}
            
        </div>
        </>
    );
};

export default FrequencyOptions;
