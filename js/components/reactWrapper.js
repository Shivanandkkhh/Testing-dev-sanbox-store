import { createRoot } from 'react-dom/client';
import React from 'react';
import JSON6 from 'json-6';

const transformProps = (propsEl, el=null) => {
    let propsJsonEl = propsEl && document.querySelector(propsEl);
    if(el) {
        propsJsonEl = propsEl && el.closest('div').querySelector(propsEl);
    }
  let props = {};
  if(propsJsonEl) {
    const jsonData = propsJsonEl.innerHTML;
    props = JSON6.parse(jsonData);
    console.log(props, "props")
  }
  console.log(props);
  return props;
}



export default (ParentComponent = null,el = null,propsEl = null, rootEl = null) => {
  //parentComponent = parent vue component
  //el = element where you want render your component
  //propsEl = class or id of script from which contains json data (props) for your component
  if(!ParentComponent || !el) {
    console.error("Check reactWrapper.js file , parentComponent and element required to create vue instance");
    return;
  }

  let root = null;
  let propData = {};

  if(rootEl) {
     let rootElement = rootEl;
     propData =  transformProps(propsEl,rootElement);
     root = createRoot(rootElement);
  }
  else {
    propData =  transformProps(propsEl);
    let rootElement = document.getElementsByTagName(`${el}`)
    root = createRoot(rootElement[0]);
  }
  
  root.render(<ParentComponent {...propData} />);
}