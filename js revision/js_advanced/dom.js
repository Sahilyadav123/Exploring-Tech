// id is unique and there can be mutiple classes 
document.getElementById().setAttribute('class', 'className') // this will replace the existing classes so need to add classes from beginning 

// title.textContent- this will display the whole text irrespactive of even if any css is applied to it e.g if we do 
// text:hidden then also it will be shown here

//title.innerHtml-  if there is a html present then it will also be shown in this 
// title.innerText- this is opposite of textContent it will show only that part that is visible on screem

//! example :

{/* <h1 >Dom learning and Chai and code <span style="display:none">test code</span></h1> */} 

//* in case of textContent it will display Whole-Dom learning and Chai and code test code

//*in case of innerText it will display only Dom learning and Chai and code

//* in case of innerHtml- it will display {/* <h1 >Dom learning and Chai and code <span style="display:none">test code</span>


//!if we receive a node list and we want to perform operation on it then we can use Array.from(tempClassList) tempClassList is a node list 