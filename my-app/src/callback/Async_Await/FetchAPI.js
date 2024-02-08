// Fetch API
// 특정 서버로부터 데이터를 받아오는 작업
import React from "react";

async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data =  response.json()
    const data = await response.json()
    console.log(data)
}
const FetchAPI = () =>{
    fetchData()
    return(
    <div id='top' style={{
        textAlign: 'center',
        paddingTop: '15px',
    }}>
        <h3>Fetch</h3>
        <hr></hr>
    </div>
    )
}

export default FetchAPI;