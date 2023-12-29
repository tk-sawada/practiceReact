import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const props = {
  clor: 'White',
  backgroundColor: 'Blue',
  padding: 3
}

root.render(
  <p style={props}>WINGSプロジェクト</p>
);

/*
const attrs = {
  href: 'https://wings.msn.to/',
  download: false,
  target: '_blank',
  rel: 'help'
};

root.render(
  <a {...attrs}>サポートページ</a>
);
*/

/*
const content = `<h3>WINGSプロジェクト</h3>
  <img src="https://wings.msn.to/image/wings.jpg" />`;
root.render(
  <p dangerouslySetInnerHTML={{__html: content}}></p>
);
*/

/*
setInterval(() =>{
  root.render(
    <>
      <p>簡易的な時計のテスト</p>
      <p>現在時刻: {(new Date()).toLocaleString()}</p>
    </>
  );
}, 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
