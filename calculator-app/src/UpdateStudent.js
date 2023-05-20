import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


function UpdateStudent() {    
    const [name, setName] = useState('')    
    const [calculation, setCalculation] = useState('')
    const [result, setResult] = useState('')    
    
    const {id} = useParams();    
    const navigate = useNavigate();

    function handleSubmit(event) {        
        event.preventDefault();        
        axios.put('http://localhost:8081/update/'+id, { name, calculation, result})        
        .then(res => {            
            console.log(res);            
            navigate('/');        
        }).catch(err => console.log(err));    
    }  
    return (    
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>        
            <div className='w-50 bg-white rounded p-3'>            
                <form onSubmit={handleSubmit}>                
                    <h2>Update Student</h2>                
                    <div className='mb-2'>                    
                        <label htmlFor="">Name</label>                    
                        <input type="text" placeholder='Enter Name' className='form-control'                     
                        onChange={e => setName(e.target.value)}/>                
                    </div>                
                    <div className='mb-2'>                    
                        <label htmlFor="">Calculation</label>                    
                        <input type="text" placeholder='Enter calculation method' className='form-control'                    
                        onChange={e => setCalculation(e.target.value)}/>                
                    </div>  
                    <div className='mb-2'>                    
                        <label htmlFor="">Result</label>                    
                        <input type="int" placeholder='Enter result' className='form-control'                    
                        onChange={e => setResult(e.target.value)}/>                
                    </div>              
                    <button className='btn btn-success'>Update</button>            
                </form>        
            </div>    
        </div>  
    )
}
export default UpdateStudent