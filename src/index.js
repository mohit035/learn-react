import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


// introduction to jsx -> javascript extension,javascript xml
// the expression which looks like html but it is jsx 
// to use jsx we have to import react module
// react module is use to create to create html element 
// babel is use to compile the jsx code to the browser understand traditional js

// pure js
// var h1 = document.createElement('h1');
// h1.innerHTML = "Mohit Khadayat";
// document.getElementById('root').appendChild(h1)  

// render multiple element 
//  to use jsx element we have to wrapped into single element 

// const arr = ['mohit','khadayat','james']
// in react v16 or higher  its possible for render()
// to return an array of elements.

//  ReactDOM.render(
//  [
//   <h1>ReactJs:</h1>,
//   <h3>React is great to learn</h3>
// ] ,
//  document.getElementById('root'));



//  react.fragment <> </> to render multiple jsx element ,extra div is added in html if we use <div>
// <> react fragment synatatic sugar </>
// ReactDOM.render(
//   <React.Fragment>
//     <h1>ReactJs:</h1>
//     <h3>React is great to learn</h3>
//   </React.Fragment>,
//   document.getElementById('root'));

// Task-1

// ReactDOM.render(
//    <>
//    <h1>Mohit Khadayat Netflix Pick</h1>
//     <h4>Here is the list of my favourite netflix series</h4>
//      <ol>
//        <li>Dark</li>
//        <li>Narcos</li>
//        <li>Better Call Saul</li>
//        <li>Breaking Bad</li>
//        <li>Money Heist</li>

//      </ol>

//   </>,
//   document.getElementById('root')

// );


// JSX expression -> if we have to use javascript inside jsx we use {}

// const fname = 'mohit khadayat';

// ReactDOM.render(
//   <>
//     <h1>my name is {fname}</h1>
//     <p>My lucky number is {3 * 3}</p>
//     <p>{Math.random()}</p>
//   </>
//   ,
//   document.getElementById('root'));


//  Template litreals

// const fname = "mohit";
// const lname = "khadayat";

// ReactDOM.render(
// <div>
// <h1> { `my name is mohit ${fname} ${lname}`}</h1>
// </div>,

// document.getElementById('root'));

// Task-2
//  render local date and time 

// const name = "mohit";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();


// ReactDOM.render(
//   <div>
//     <h1> My name is {name}</h1>
//     <p>Todays Date is {currDate}</p>
//     <p>Todays Time is {currTime}</p>

//   </div>,

//   document.getElementById('root'));


// react attributes ,we say jsx attributes like html attributes
//  there are some rules for jsx attriutes , camelcase to follow


// const name = "mohit";
// const img1 = "https://picsum.photos/200";
// const links = "https://www.google.com.np";
// ReactDOM.render(
//   <>
//     <div>
    
//       <h1 className = "heading"> My name is {name}</h1>
      
//       <img src = {img1} alt = "randomImages"/>
//       <img src = {img1} alt = "randomImages"/>
//       <div className="img_div">
//       <img src = {img1} alt = "randomImages"/>
//       <a href = {links} target = "_blank">
//        <img src = {img1} alt = "randomImages"/>
//      </a>
//      </div>
//     </div>
//   </>,
//     document.getElementById('root'));


    //  css in react
  

    // Task 3 greeting according to time 

    // let curDate = new Date();
    // curDate = curDate.getHours();
    // let greeting = " ";
    // const cssStyle = { };
    
    // if(curDate >= 1 && curDate <=12){
    //        greeting = "Good Morning";
    //        cssStyle.color = "green";

    // }else if(curDate >= 12 && curDate <19){
    //   greeting = "Good Afternoon"
    //     cssStyle.color = "black";

    // }else{
    //   greeting = "Good Night";
    //   cssStyle.color = "red";

    // }
  


    // ReactDOM.render(
    //   <h1>Hello Sir, <span style = {cssStyle}>{greeting} </span> </h1>,
    //   document.getElementById("root")
    // );
  

    // component