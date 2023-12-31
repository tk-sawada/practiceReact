import { useState } from 'react';

export default function StateBasic({ init }){
    // Props (init) でStat (count)を初期化
    const [count, setCount] = useState( init );
    // [カウント]ボタンクリック時にカウント値をインクリメント
    const handleClick = () =>setCount(count + 1);
    console.log(`count is ${count}.`)

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    );
}