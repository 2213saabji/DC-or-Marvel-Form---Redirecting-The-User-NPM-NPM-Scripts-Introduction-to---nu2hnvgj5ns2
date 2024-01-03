'use client';
import { useState } from 'react';
function Summary({ formData }) {
  return (
    <div id='summary'>
      <h2>Summary</h2>
      <p>Form Type:{formData.formtype} </p>
      <p>Age: {formData.age} </p>
      {formData.dc.length>0?
      <p>DC Shows: {formData.dc} </p>
:
      <p>Marvel Shows: {formData.marvelShows}</p>
}
    </div>
  );
}
export default Summary;
