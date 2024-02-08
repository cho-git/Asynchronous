import React from "react";
import {ApiCall} from './apis/api'
const UseApi = () =>{
    ApiCall();
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>UseApi</h3>
            <hr></hr>
            <h4>F12!</h4>
        </div>
    )
}
export default UseApi;