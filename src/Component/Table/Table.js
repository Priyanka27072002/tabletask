import React from "react";
import {FaEdit} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'
import { useSelector } from "react-redux";
import { handlearr } from "../Slice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Table.css'
const Table=()=>{
    let dispatch=useDispatch()
    let state=useSelector((sam)=>sam)
    console.log(state.data.arr);
    const del=(id)=>{
       let x= state.data.arr.map((v)=>{
           return v.id===id?v.bool===true?{...v,bool:false}:{...v,bool:true}:v
        })
        dispatch(handlearr(x))
    }
    let nav=useNavigate()
    let edit=(id)=>{
       nav(`/?id=${id}`) 
    }
    return(
        <div>
            <div className="table-container">
            <table className="table">
                            <tr>
                                <th>Transaction ID</th>
                                <th>User ID</th>
                                <th>Account ID</th>
                                <th>Amount</th>
                                <th>Balance</th>
                                <th>Transaction Time</th>
                                <th>Change</th>
                            </tr>
            {
                state.data.arr.map((e,i)=>{
                
                    return e.bool===true?(
                        
                            <tr key={i}>
                                <td>{e.tranid}</td>
                                <td>{e.userid}</td>
                                <td>{e.accountid}</td>
                                <td>{e.amount}</td>
                                <td>{e.balance}</td>
                                <td>{e.time}</td>
                                <td><FaEdit onClick={()=>edit(e.id)}/>   <BsTrash onClick={()=>del(e.id)}/></td>
                            </tr>
                        
                    ):""
                })
            }
            </table>
            </div>
        </div>
    )
}
export default Table