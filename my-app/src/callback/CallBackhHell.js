import React, { useState } from "react";
import { login, addToCart, makePayment } from './apis/api'
const CallBackhHell = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    // ver 1
    // const handlesubmit = () => {
    //     login(userId, () => {
    //         alert(`${userId}님 안녕하세요`);
    //         addToCart('디퓨저', (product) => {
    //             console.log(`${product}를 장바구니에 넣었습니다.`);
    //             makePayment("0000000000000000", "디퓨저", (cardNumber, product) => {
    //                 console.log(`${cardNumber.slice(0, 6)}로 ${product}를 구매했습니다.`)
    //             });
    //         })
    //     });
    //     debugger
    // } // 콜백지옥
        const handlesubmit = () => {
            login(userId).then((userId)=>{
                    alert(`${userId}님 안녕하세요`)
            }).catch((error)=>{console.log(error,'에러인데영')})
    } 
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>Shop</h3>
            <hr></hr>
            <form
                onSubmit={handlesubmit}>
                <input
                    type="text"
                    value={userId}
                    placeholder="CHO....."
                    onChange={(e) => setUserId(e.target.value)}
                /><p></p>
                <input
                    type="password"
                    value={userPw}
                    placeholder="PW....."
                    onChange={(e) => setUserPw(e.target.value)}
                /><p></p>
                <button
                    type="submit"
                >
                    로그인
                </button>
            </form>
        </div>
    )
}

export default CallBackhHell;