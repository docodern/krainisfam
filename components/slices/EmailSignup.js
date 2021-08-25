import React from 'react';
import { useState } from 'react'
import { AtSymbolIcon } from '@heroicons/react/outline'

const EmailSignup = ({ slice }) => {
  
  const [input, setInput] = useState('')
  let valid = false
if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input))
  {
   valid = true
  } else  {
   valid = false
  }

console.log(valid)
  const subscribe = async (e) => {
    e.preventDefault()
    setInput("")
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: input
        })
      })
      
      if (res.status === 201) {
        alert('You are subscribed!')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err)
    }
  }

  return (
  <section className="section h-screen">
    <div className="box h-4/5 content-center justify-center divide-y lg:divide-x lg:divide-y-0 lg:justify-between">
      <div className="text-center mb-16 lg:w-1/2 lg:text-left lg:mb-0">
        <h3 className="text-2xl font-bold mb-8 lg:text-4xl">{slice.primary.title}</h3>
        <p className="text-xl lg:text-2xl">{slice.primary.description}</p>
      </div>
      <form className="flex flex-col w-full pt-16 lg:w-1/3 lg:pt-0 lg:pl-16">
        <div className="relative">
      <label htmlFor="mail" className="text-xl ml-2 lg:text-2xl">{slice.primary.input_title}</label>
        <input className={`h-12 rounded-xl border border-txc p-2 shadow-inner w-full pl-10 focus:outline-none ${valid ? "focus:border-green-500" : "focus:border-red-500"}`}
             id="mail"
             type='text'
             placeholder={slice.primary.placeholder}
             value={input}
             onChange={e => setInput(e.target.value)}
             required
        />
        <AtSymbolIcon className={"block w-6 absolute bottom-3 left-2"} aria-hidden="true" />
        </div>
        <button type='submit' className="mt-10 h-12 rounded-xl bg-txc text-txc-light text-xl lg:text-2xl transition duration-700 ease-in-out transform hover:scale-105" onClick={subscribe} disabled={valid ? false : true}>
        {slice.primary.button_text}
        </button>
      </form>
    </div>
  </section>
  );
}

export default EmailSignup;
