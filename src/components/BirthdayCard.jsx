import React from 'react'


export default function BirthdayCard({state, file, image}) {
  return (
    <>
    
    <section className=' pb-2 flex flex-col items-center justify-center mt-32 m-auto rounded-md  w-1/4'>
      <div className=' w-[400px] h-[350px] rounded-t-md' >
      <img alt='Image selected' src={image} className=' h-[100%] rounded-t-md   w-[100%] object-cover'/>
      </div>
      <div className=' bg-slate-400 w-[400px] rounded-b-md text-center p-4 '>
      <h2 className=' font-kode py-1'><span>{state.name}</span><span className=' ml-2'>{state.surname}</span></h2>
      <p className=' font-kode py-1'>{2024 - state.dob.slice(0,4)} years</p>
      <p className=' font-kode py-1'>{state.occupation}</p>
      <p className=' font-kode py-1'>{state.summary}</p>

      </div>
      

    </section>
    </>
    
  )
}
