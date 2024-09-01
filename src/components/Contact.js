import React from 'react'

const Contact = () => {
  return (
    <div className="grid place-content-center m-4 p-4">
      <h1 className='font-bold text-2xl my-3'>Contact Us Page</h1>
      <form className='flex flex-col'>
        <input type="text" className='border border-black m-2 p-2' placeholder='Name'/>
        <input type="text" className='border border-black m-2 p-2' placeholder='Message'/>
        <button className="btn btn-primary border border-black m-2 p-2 bg-blue-400 rounded-xl">Submit</button>
      </form>    
    </div>
  )
}

export default Contact;
