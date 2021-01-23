import axios from 'axios';

export const Request=(method, url, head, data)=>{
    return axios({
        method: method,
        url: "http://3.12.85.2:3000/" + url,
        headers: head,
        data: data
    }).then((e)=>{
        console.log(e);
    }).catch((err)=>console.log(err))
} 