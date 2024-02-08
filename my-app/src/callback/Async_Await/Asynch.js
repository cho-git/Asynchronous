//Asynch
import React from "react";
import { Link } from "react-router-dom";
// 일반적인 함수와 Async 함수를 비교해보자

// function getUser() {
//     return 'Cho';
// }
// const promise = new Promise((resolve) =>resolve('Cho'))
function networkRequest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log('데이터를 받아왔습니다.');
            resolve();
        },1000)

    })
}
async function getUser(){
    // networkRequest()
    // const result = await networkRequest()
    throw new Error('에러입니당')
    await networkRequest()
    return 'cho'
};

async function getToto(){
    await networkRequest();
    return ['청소하기','밥먹기'];
}
// 별코딩 자바스크립트 비동기 프로그래밍 #4 | Async & Await 11:40 혼자해보기
// 혼자한것 
// async function getData(){
//     const result = Promise.all([getUser(),getToto()]);
//     result.then(data=>{
//         console.log(data)
//     })
// }

// 별코딩님 코드
async function getData(){
    // const user = await getUser();
    // const todo = await getToto();
    // console.log(user ,toto)
    // console.log(`${user}님 ${todo}를 하세요`)
    let user
    try{
        user= await getUser();
    }catch(error){
        user ='익명'
        console.log(error.message);
    }
}


// function getUserPromise(){
//     return networkRequest()
//     .then(()=>{
//         return networkRequest();
//     })
//     .then(()=>{
//         return '별코딩';
//     });
// }

// 혼자 연습
// async function getUser(){
//     const promise = new Promise((resolve , reject)=>{
//         const data = { name:"Cho"};
//         if(data){
//             resolve(data)
//         }else{
//             reject(new Error (Error , '에러입니다.'))
//         };
//     });
//     return promise
// } 

const Asynch = () => {

    // getUserPromise()

    // const promise = getUser()
    // // console.log(promise)
    // promise.then((data)=>{
    //     console.log(data)
    // })

    const promise = getData()
    // console.log(promise.data)
        
    

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>Async</h3>
            <hr></hr>
            <div style={{
                paddingTop: '20px'
            }}>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'green',
                    fontWeight: 'bold',
                }}
                    to={"/Fetch"}>FetchAPI </Link>
                    
            </div>
        </div>
    )
}

export default Asynch;