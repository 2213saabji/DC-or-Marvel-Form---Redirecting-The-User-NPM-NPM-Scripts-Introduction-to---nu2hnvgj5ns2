'use client';
import { useState,useLocate } from 'react';
import Summary from './Summary';

function FormA({setStep, onSubmit, age }) {
  const [dc, setdc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(4);
    onSubmit({formtype:"Form A",dc:`${dc}`,marvelShows:'',age:`${age}`})
  };
  return (
    <form id='dc' onSubmit={dc.length>0?handleSubmit:""}>
      <h2>Form A</h2>
      <label>
        Select DC Shows:
        <select onChange={(e)=>setdc(e.target.value)}>
          <option value=''>--Select--</option>
          <option value='The Flash'>The Flash</option>
          <option value='Arrow'>Arrow</option>
          <option value='Supergirl'>Supergirl</option>
          <option value='Legends of Tomorrow'>Legends of Tomorrow</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type='number' value={age} disabled />
      </label>
      <br />
      <button id='submit-dc' type='submit'>
        Submit
      </button>
    </form>
  );
}
export default FormA;
