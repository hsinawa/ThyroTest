import { BrowserRouter , Route,Routes,Link, useParams } from "react-router-dom";
import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetAllTestsReducer} from '../reducers/TestsReducer'
import {GetAllTestsAction} from '../actions/TestsAction'
import CircularStatic from "../components/loading";
import React from 'react'
import './grid.css'
import GridTests from "./GridTests";


//Material UI
import TextField from '@material-ui/core/TextField'
import InputLabel from '@mui/material/InputLabel';



export const AllTestsSearch = () => {
    
    
    const getalltests = useSelector(state=> state.GetAllTestsReducer )
    const {tests , loading , error} = getalltests

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllTestsAction())
    } , [] )


    const [SearchTerm , setSearchTerm] = useState('')


    return(
        <div>
                  {loading && ( <CircularStatic />)}
                  <TextField
                    required
                    id="outlined-basic" label="Search..." variant="outlined" style={{ width: '100%' }}
                    value={SearchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    style={{ width: '90%' }}
                />


            {tests&&(
                <div className='grid-3'>
                    {
    tests.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.name.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ).map(i=>{
        return <p  >



            <a href={`test/${i._id}`} style={{textDecoration:'none'}} >  
            <p> 
            <GridTests i={i} />
            </p>
            </a>
            </p>
    })
                    }
            
                </div>
            )}
        </div>
    )
}

export default AllTestsSearch