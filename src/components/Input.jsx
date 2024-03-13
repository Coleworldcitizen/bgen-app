import React from 'react';

export default function Input({ name,...props}) {
  const inputType = props.type || 'textarea'; // Use props.type if provided, otherwise default to 'text'

  const labelClassesNoDate = 'text-stone-700 m-auto text-start active:bg-slate-400 focus:bg-slate-400 focus:outline-none  mx-2 w-[100%] py-2 px-2 bg-slate-400 rounded-sm' 

  const labelClasses = 'text-stone-700 m-auto  text-start active:bg-slate-400 focus:bg-slate-400 focus:outline-none  mx-2 w-[100%] py-2 px-2 bg-slate-400 rounded-sm capitalize' 





  return (
    <p className=' text-center flex flex-col  py-2 px-2 '>
      <label htmlFor={name} className='text-start  capitalize font-kode text-stone-600'>{name}:</label>
      <input id={name} type={inputType} name={name}  {...props} className={inputType === 'date' ? labelClassesNoDate:labelClasses} />
    </p>
  );
}
