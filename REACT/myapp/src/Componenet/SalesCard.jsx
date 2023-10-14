import React from 'react'

export default function SalesCard({title,input,placeholder}) {
  return (
    <>
    <div className='form-outline'>
      <label className='form-label'>
        {title}
      </label>
      <input
        type={input}
        id='form8Example4'
        placeholder={placeholder}
        className='form-control'
      />
    </div>
  </>
);

}
