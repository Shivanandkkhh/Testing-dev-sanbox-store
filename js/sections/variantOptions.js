import reactWrapper from "JsComponents/reactWrapper";
import VariantSelector from "ReactComponents/variant-selector";
// import "StyleComponents/variant-options.scss"; 

document.addEventListener('Variant:Changed', (ev) => {
   const updatedVariant = ev.detail;
   if(window.updateSelectedVariant) {
    window.updateSelectedVariant(updatedVariant)
   }
})

export default () => {
    reactWrapper(VariantSelector, 'variant-selector', '#variant-data');
}

