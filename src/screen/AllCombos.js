import { BrowserRouter , Route,Routes,Link, useParams } from "react-router-dom";

import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import {GetTestsByComboReducer} from '../reducers/TestsReducer'
import {GetComboTestsAction} from '../actions/TestsAction'
import CircularStatic from "../components/loading";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; 
import TextField from '@material-ui/core/TextField'
import InputLabel from '@mui/material/InputLabel';

import React from 'react'
import GridTests from "./GridTests";

export const ComboSearch = () => {

    const getalltests = useSelector(state=> state.GetTestsByComboReducer )
    const {tests , loading , error} = getalltests

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetComboTestsAction())
    } , [] )

    const [SearchTerm , setSearchTerm] = useState('')
    return(
        <div>


         
                  <TextField
                    required
                    id="outlined-basic" label="Search..." variant="outlined" style={{ width: '100%' }}
                    value={SearchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    style={{ width: '90%' }}
                />


            {loading && ( <CircularStatic />)}
            <div className='grid-3'>
            {tests && (tests.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.name.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ).map(i=>{
                return <p> 
                      <a href={`test/${i._id}`} style={{textDecoration:'none'}} >  
            <p> 
            <GridTests i={i} />
            </p>
            </a>
                     </p>
            }))}
            </div>

           
        </div>
    )
}

export default ComboSearch