import React from "react";

const CallBack = () => {
    console.log('시작')
    setTimeout(() => {
        console.log('2')
    }, 3000);
    console.log('1');
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}><h3>callBack</h3>
            <hr></hr>
            <h4> 개발자도구 콘솔을 확인하세요</h4>
        </div>
    )
}
export default CallBack;

//Callback
//다른함수의 인자로 전달되는 함수
