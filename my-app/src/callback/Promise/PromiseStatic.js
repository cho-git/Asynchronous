import React from "react";

function getName() {
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            // resolve(()=>{
                resolve('Cho');
            // reject(new Error ( ' : 이름이 없습니다'))
            // });
        },40);
    });
}
function getToto() {
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            resolve('밥먹기');
            // reject(new Error ( ' : 할 일이 없어요'))
        },500);
    });
}


const PromiseStatic = () =>{
//1.Promise.all()
    //하나라도 실패하면 반환된 reject 를 반환한다.
    const promise = Promise.all([getName() , getToto()]);
    promise.then(data=>{
        // console.log(data[0])
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })


    return(
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>PromiseStatic</h3>
            <hr></hr>
            <h4>F12!</h4>
        </div>
    )
}

export default PromiseStatic;


// 2. Promise.allsettled()
    // reject 가 있어도 fulfilled와 reject 를 모두 배열 형태로 리턴해준다
    // const promise = Promise.allSettled([getName() , getToto()])
    // promise.then((data)=>{
    //     console.log(data);
    // });

//3.Promise.any()
    // 가장 먼저 resolve 된 값만 return 해준다
    // 모두 reject 일 경우 catch 블록이 실행된다.
    //     const promise = Promise.any([getName() , getToto()]);
    //     promise.then((data)=>{
    //         console.log(data)
    //     });


//4. Promise.race() 실패 성공 여부 상관없이 달리기!
    // const promise = Promise.race([getName() , getToto()]);
    // promise.then((data) =>{ 
    //     console.log(data)
    // });