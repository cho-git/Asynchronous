import React from "react";

// Callback
// 다른 함수의 인자로 전달되는 함수
const getdata = (Call) => {
    setTimeout(() => {
        console.log('서버에서 데이터를 받아왔어요')
        Call({ name: "Cho" });
    }, 2000);
}

const ClBack = () => {
    getdata((data) => {
        console.log(data.name, '님이 후처리 진행중 입니다.')
    });

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>callBack</h3>
            <hr></hr>
            <h4>F12!</h4>
        </div>
    )
}

export default ClBack;