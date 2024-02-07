import React from "react";

const Basic = () =>{
    console.log('1');
    setTimeout(()=>{
        console.log('2')
    },3000);
    return(
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}><h3>Basic</h3>
        </div>
    )
}
export default Basic;