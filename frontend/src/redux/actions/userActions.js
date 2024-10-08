import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})
    
    try {
        console.warn(reqObj);
        
        const response = await axios.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('UserName or Password is incorrect')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const adminLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        console.warn(reqObj);
        const response = await axios.post('/api/users/admin' , reqObj)
        // if(localStorage.getItem('user'))
        // {
        //     localStorage.removeItem('user')
        // }
        
        localStorage.setItem('admin' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/adminlog'
         
        }, 500);
    } catch (error) {
        console.warn(error)
        console.warn(reqObj);
        message.error('admin UserName or Password is incorrect')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/register' , reqObj)
        message.success('Registration successfull')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Fill The Details Correctly')
        dispatch({type: 'LOADING' , payload:false})
    }
}