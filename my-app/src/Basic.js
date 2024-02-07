import React from "react";

const Basic = () => {
    console.log('시작')
    setTimeout(() => {
        console.log('2')
    }, 3000);
    console.log('1');
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}><h3>Basic</h3>
            <hr></hr>
            <h4> 개발자도구 콘솔을 확인하세요</h4>
        </div>
    )
}
export default Basic;
//javaScript >> 싱글 쓰레드
//  ㄴ 한번에 하나의 작업만 진행한다
//멀티 쓰레드 Web APIs ( setTimeout , fetch , DOM)
//setTimeout 브라우저에서 제공되는 비동기 함수
//첫번째 인자 콜백함수 , 두번쨰 인자 지연시간 3000: 3초
//setTimeout()과 console.log('1'); 을 바꿔도 1이 먼저 출력되고 2가 출력되는 것을 볼수 있다.

// 싱글 쓰레드 의 '시작' 멀티쓰레드 setTimeout 진행 3초 새기
// '시작' 이 끝나면 싱글쓰레드 console.log('1') 출력
// 3초 후 콘솔에 2 가 출력
