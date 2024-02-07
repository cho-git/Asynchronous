import React from "react";

function getdata() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "CHO" };
            // const data = null;
            if (data) {
                console.log('네트워크 요청 성공')
                resolve(data)
            } else {
                reject(new Error("네트워크 문제!!"))
            }
        }, 1000);
    });
    return promise;
}
//Promise Chaining
const Promises = () => {
    const promise = getdata()
    // promise.then().then().then().then()// .... <<< Promise Chaining

    // 1.
    // promise
    // .then((data) =>{
    //     console.log(data);
    //     return getdata()
    // })
    // .then((data) =>{
    //     console.log(data);
    //     return getdata()
    // })
    // .then((data) =>{
    //     console.log(data);
    // })

    //2.
    // promise
    //     .then(()=>getdata())
    //     .then(()=>getdata())
    //     .then(()=>getdata())
    //     .then(console.log)

    //3.
    promise
        .then((data) => {
            console.log(data);
            return "hello"
        }).then((data)=>{
            console.log(data)
        })

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>Promise</h3>
            <hr></hr>
        </div>
    )
}
export default Promises;