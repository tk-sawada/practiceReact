
export default function EventBasic({ type }){
    //clicイベントハンドラー
    const current = () => {
        const d = new Date();
        //type属性の値に応じて現在日時をログに出力
        switch(type) {
            case 'date':
                console.log(d.toLocaleDateString());
                break;
            case 'time':
                console.log(d.toLocaleTimeString())
                break;
            default:
                console.log(d.toLocaleTimeString())
                break;
        }
    };
    return (
        <div>
            {/*ボタンクリっっくじにcurrent関数を呼び出し*/}
            <button onClick={current}>現在時刻を取得</button>
        </div>
    )
}