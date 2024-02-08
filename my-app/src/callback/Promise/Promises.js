import React from "react";
import {Link} from 'react-router-dom'
import PromiseStatic from "./PromiseStatic";
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
            <h4>F12!</h4>
            <div style={{
                paddingTop: '20px'
            }}>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'green',
                    fontWeight: 'bold',
                }}
                    to={"/PromiseStatic"}>PromiseStatic </Link>
                    
            </div>
        </div>
    )
}
export default Promises;