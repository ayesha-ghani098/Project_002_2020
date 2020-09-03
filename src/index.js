import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    // <App url="images/1.jpg" title="Navy Blue Jacket" body="Opt for this super-practical zip-up jacket in navy blue sporty bomber jacket made with knitted fabric. Made with light outer fabric, it guarantees sporty look. Featuring baseball ribbed collar & cuffs with vertical hand pockets. Must have for a sporty look
    // Product Code : JKT-086
    // Outer: 100% Cotton, Lining: 65% Polyester, 35% Cotton"/>,

    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();