import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World!</h1>,
 document.getElementById('root') );

// introduction to jsx -> javascript extension,javascript xml
// the expression which looks like html but it is jsx 
// to use jsx we have to import react module
// react module is use to create to create html element 
// babel is use to compile the jsx code to the browser understand traditional js
var h1 = document.createElement('h1');
h1.innerHTML = "Mohit Khadayat";
document.getElementById('root').appendChild(h1)