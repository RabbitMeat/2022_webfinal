import Socket from "./client_socket"; //這是測試
import WhatYouNeed from "../data/client_data.json"

/*
從這裡判斷現在render頁面
if現在狀態 -> render出哪個畫面
*/

export default function App(){
    return(
        <>
            <Socket />
        </>

    )
}