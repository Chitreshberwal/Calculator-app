import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
  const [name, setName] = useState('');
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8081/create', { name, calculation, result })
      .then(res => {
        const { data } = res; // Assuming the server returns the created student object with an 'ID' property
        console.log(data);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Calculation</label>
            <input
              type='text'
              id='email'
              placeholder='Enter caculation method'
              className='form-control'
              value={calculation}
              onChange={e => setCalculation(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Result</label>
            <input
              type='int'
              id='email'
              placeholder='Enter result obtained'
              className='form-control'
              value={result}
              onChange={e => setResult(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;


