import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import {GetAllTestsReducer} from '../reducers/TestsReducer'
import {DeleteTestAction, GetAllTestsAction} from '../actions/TestsAction'
import CircularStatic from "../components/loading";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; 
import './tests.css'

export const AllTests = () => {

    const getalltests = useSelector(state=> state.GetAllTestsReducer )
    const {tests , loading , error} = getalltests

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllTestsAction())
    } , [] )

    const deleteTest = (id)=>{
        alert('Do you want to delete?')
       dispatch(DeleteTestAction(id))
    }

    return(
        <div>
           
           <a href='/admin/addtests' style={{color:'#95C5E4' , textDecoration:'none' }} >
       <p  >   <AddIcon/> Click Here to Add Test </p>
       </a>

       <table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
            
        </tr>
    </thead>
    {loading && ( <CircularStatic />)}
   
    {
           tests && (
               tests.map(i=>{
                 return <tr>
                         <td data-label='Name' > {i.name} </td>
                         <td data-label='Price' > {i.price} </td>
                         <td data-label='Category' > {i.category} </td>
                        
                         <td data-label='Delete' onClick={()=> deleteTest(i._id)} > <DeleteIcon /> </td>
                       
                         <td data-label='Edit' > <EditIcon /> </td>
                     </tr>
                
               })
           )
       }
         

    </table>
      
     

      
        </div>
    )
}

export default AllTests 