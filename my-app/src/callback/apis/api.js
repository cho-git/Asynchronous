//api.js


// 1.로그인
// ver 1. 콜백지옥
// export function login(username , callBack){
//     setTimeout((
//         callBack(username)
//     ),1000);
// }

// login("Cho" , (username)=>{
//     alert(`${username}님 안녕하세요`);
// });

// ver 2. promise사용
export function login(userId) {
    return new Promise((resolve, reject) => {
        if (userId) {
            resolve(userId);
        } else {
            reject(new Error('아이디를 입력해주세요'));
        }
    });
}


// login().then((username) => {
//     alert(`${username}님 안녕하세요`)
// }).catch((error)=>{
//     console.log(error , '에러입니당')
// })

// 2. 장바구니에 넣기 
// ver 1. 콜백지옥
export function addToCart(product, callBack) {
    setTimeout((
        callBack(product)
    ), 1000);
}
// addToCart("감자" , (product) =>{
//     console.log(`${product}를 장바구니에 넣었습니다.`);
// })


// 3. 결제하기
// ver 1. 콜백지옥
export function makePayment(cardNumber, product, callBack) {
    setTimeout((
        callBack(cardNumber, product)
    ), 1000);
}
// makePayment("0000000000000000", "감자" , (cardNumber , product) =>{
//     console.log(`${cardNumber.slice(0,6)}로 ${product}를 구매했습니다.`)
// });



//fetch api
//URL : https://jsonplaceholder.typicode.com/users

// fetch().then().catch().finally()

export function ApiCall() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
    })
        .catch((error) => {
            console.log(error, '에러')
        }).finally(() => {
            console.log('마무리')
        })
}