import React from 'react';
import StyledPanel from './StyledPanel';
//import StaticBasic from './StateBasic';
<<<<<<< HEAD
//import books from './books';
//import ForItem from './ForItem';
=======

import books from './books';
import ForItem from './ForItem';
>>>>>>> 3361068c9f4a77a5b3d9fc030c457cdfb15d2203
//import ForSort from './ForSort';
//import ForList from './ForList';
//import EventBasic from './EventBasic';
//import './EventBasic';
//import MyHello from './MyHello';
//import App from './App';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< HEAD
  <StyledPanel>
    <p>メンバー募集中</p>
    <p>ようこそ、WINGSプロジェクトへ！！</p>
  </StyledPanel>
=======
  <ForItem src={books} />
>>>>>>> 3361068c9f4a77a5b3d9fc030c457cdfb15d2203
);

/*
root.render(
<<<<<<< HEAD
  <ForItem src={books} />
);
*/

/*
root.render(
=======
>>>>>>> 3361068c9f4a77a5b3d9fc030c457cdfb15d2203
  <ForSort src={books} />
);
*/


/*
root.render(
  <StaticBasic init={0} />
)
*/

/*
root.render(
  <EventBasic type="time" />
);
*/

/*
<MyHello myName={{name: '鈴木', age: 48}} />

root.render(
  <MyHello myName />
)
*/


// P.79
/*
const title = 'ここれからはじめるReact実践入門';

//createElementメソッドを使った場合
root.render(
  //上位の<div>要素を生成
  React.createElement(
    'div',
    {className: 'main'},
    //小要素の<p>、<img>、テキストを列挙
    React.createElement(
      'p',
      null,
      `「${title}(SBクリエイティブ刊)`
    ),
    React.createElement(
      'img',
      {
        src: 'https://wings.msn.to/books/978-4-8156-1948-0/978-4-8156-1948-0.jpg',
        alt: title
      }
    ), 
    '絶賛発売中！'
  )
)
*/
//createElementメソッドを使わない場合
/*
root.render(
  <div className="main">
    <p> 「{title}」(SBクリエイティブ刊)</p>
    <img src="https://wings.msn.to/books/978-4-8156-1948-0/978-4-8156-1948-0.jpg"
        alt={title} />
    絶賛発売中！
  </div>
);
*/

/*
const props = {
  clor: 'White',
  backgroundColor: 'Blue',
  padding: 3
}

root.render(
  <p style={props}>WINGSプロジェクト</p>
);
*/

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
