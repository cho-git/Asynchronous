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
        </div>
    )
}
export default UseApi;