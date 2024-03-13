import React from 'react';
import Input from './Input';

export default function DateInput({ onChange, onSubmit, onFile }) {
  return (
    <section className='mt-8'>
      <h2 className='text-xl font-bold text-center mb-4'>Fill in the form to generate your card!</h2>
      <form onSubmit={onSubmit} className='w-full max-w-md mx-auto bg-gray-100 px-8 py-6 rounded-md shadow-md'>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <Input name='name' type="text"  onChange={onChange} />
            <Input name='dob' type="date" onChange={onChange} />
           
          </div>
          <div className='flex flex-col'>
          <Input name='surname' type="text" onChange={onChange} />
            <Input name='occupation' type="text" onChange={onChange} />
          </div>
        </div>

        <div className='mt-4'>
        <label htmlFor='summary' className='text-start  capitalize font-kode text-stone-600'>Summary:</label>
          <textarea name='summary'  onChange={onChange} className='text-stone-700 m-auto  text-start active:bg-slate-400 focus:bg-slate-400 focus:outline-none  mx-2 w-[100%] py-2 px-2 bg-slate-400 rounded-sm capitalize' />
        </div>

        <div className='flex flex-col mt-4'>
          <input type="file" id="imageUpload" name="imageUpload" onChange={onFile} accept="image/jpg, image/jpeg, image/png, image/avif" className='my-4 font-kode' />
        </div>

        <div className='text-center mt-6'>
          <button type='submit' className='text-stone-600 hover:text-stone-300 font-kode bg-slate-400 hover:bg-slate-500 px-4 py-2 rounded-md shadow-md font-semibold'>Submit</button>
        </div>

      </form>
    </section>
  );
}
