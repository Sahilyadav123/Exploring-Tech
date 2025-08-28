import React from 'react';
// const reactElement={
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank',
//     },
//     children:'click me '
// }

// function customRendor(reactElement,mainContainer) {

//     // const a=document.createElement(reactElement.type);
//     // a.setAttribute('href',reactElement.props.href);
//     // a.setAttribute('target',reactElement.props.target);
//     // // a.href=)=reactElement.props.href;
//     // // a.target=reactElement.props.target;
//     // a.innerHTML=reactElement.children;
//     // mainContainer.append(a);


//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children;
//     for (const prop in reactElement.props) {
//         domElement.setAttribute(prop,reactElement.props[prop])
//     }

//     mainContainer.appendChild(domElement);
// }


// const mainContainer=document.getElementById('root')

// customRendor(reactElement,mainContainer);

//! in the app.jsx the function get converted to object only but there is a format we cannot directly pass the object 


// const another=(
//     <a href="https://google.com" target='_blank' rel="noopener">
//         click me
//     </a>
// )


//! the upper statement will get converted to something like this 
// const another = React.createElement(
//   "a",                                // type of element
//   { href: "https://google.com", target: "_blank" }, // props
//   "click me"                          // children
// );

//! create a element using react 

// const element=React.createElement(
//     'a', // tags
//     {href:'https:google.com',target:'_blank'},  // attributs
//     'click to visit google'   // text 
// )

