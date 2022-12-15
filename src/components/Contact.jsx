import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-slate-500 to-slate-200 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white'>Contact</p>
          <p className='py-6'>Submit the form below to get in toch with me.</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/523425bb-96a0-499e-a6d6-44c525b8d874" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" placeholder="Enter Your name:" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="text" name="phone" placeholder="Enter Your phone:" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-1' />
            <input type="email" name="email" placeholder="Enter Your email:" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-1' />
            <textarea placeholder='Enter your Massage' name="massage" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
          </form>
        </div>
        <button value="yes" className='text-white bg-gradient-to-b from-cyan-600 to-blue-700 px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Get in Toch</button>
      </div>
    </div>
  )
}

export default Contact;
