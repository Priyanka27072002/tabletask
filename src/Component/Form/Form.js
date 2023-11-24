import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handlearr } from "../Slice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import './Form.css'
const Form=()=>{
    let t=new Date()
    let time=t.toLocaleTimeString()
    console.log(time);
    let [id,setId]=useState(1)
    let [tranid,setTransid]=useState()
    let [userid,setuserid]=useState()
    let [accountid,setAccid]=useState()
    let [amount,setAmount]=useState()
    let [balance,setBalance]=useState()
    let bool=true
    let check=(e)=>{
        if(e.target.name==="id"){
            setId(e.target.value)
        }
        else if(e.target.name==="trans"){
            setTransid(e.target.value)
        }
        else if(e.target.name==="user"){
            setuserid(e.target.value)
        }
        else if(e.target.name==="acc"){
            setAccid(e.target.value)
        }
        else if(e.target.name==="amo"){
            setAmount(e.target.value)
        }
        else if(e.target.name==="bal"){
            setBalance(e.target.value)
        }
        
    } 
    let [params]=useSearchParams()
    let para=(params.get("id"))
    console.log(para);

    // useEffect(()=>{

    // },[id])
    let nav=useNavigate()
    let goto=()=>{
        nav("/table")
    }
    let dispatch=useDispatch()
    let state=useSelector((samp)=>samp)
    let submit=(e)=>{
        e.preventDefault()
        setId(id+1)
        let obj={id,tranid,userid,accountid,amount,balance,bool,time}
        console.log(obj);
        if(para!==null){
            let y=state.data.arr.map((e)=>{
                return e.id===Number(para)?obj:e
            })
            dispatch(handlearr(y))
        }
        else{
            dispatch(handlearr([...state.data.arr,obj]))
        }
        // setId("")
        setTransid("")
        setuserid("")
        setAccid("")
        setAmount("")
        setBalance("")
    }
   
    
    useEffect(()=>{
       
       

        if(para!==null){
                    let x= state.data.arr.find((e)=>{
                       return e.id===Number(para)
                    })
                    console.log(x);
       
        setTransid(x.tranid)
        setuserid(x.userid)
        setAccid(x.accountid)
        setAmount(x.amount)
        setBalance(x.balance)
        setId(x.id)
                }
    },[])
    console.log(state.data.arr);
    return(
        <div>
            <div className="container">
            <form >
                <div>
                    <label>ID :</label>
                    <input type="text" value={id}  onChange={check} name="id"/>
                </div>
                <div>
                    <label>transaction ID :</label>
                    <input type="text" value={tranid} onChange={check} name="trans"/>
                </div>
                <div>
                    <label>User ID :</label>
                    <input type="text"  value={userid} onChange={check} name="user" />
                </div>
                <div>
                    <label>Account ID :</label>
                    <input type="text"  value={accountid} onChange={check} name="acc" />
                </div>
                <div>
                    <label>Amount :</label>
                    <input type="text" value={amount}  onChange={check} name="amo"/>
                </div>
                <div>
                    <label>Balance :</label>
                    <input type="text" value={balance}  onChange={check} name="bal" />
                </div>
                <div className="sub-btn">
                    <button onClick={submit}>Submit</button>
                </div>
                <div className="home-btn">
                    <button onClick={goto}>Home</button>
                </div>
                   
            </form>
            </div>
        </div>
    )
}
export default Form 