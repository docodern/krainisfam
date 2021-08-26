import React from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, AtSymbolIcon, BadgeCheckIcon } from '@heroicons/react/outline'

const EmailSignup = ({ slice }) => {
  
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const cancelButtonRef = useRef(null)
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
        setOpen(true)
        setDone(true)
        setInput("")
      } else {
        setDone(false)
        setOpen(true)
        setInput("")
      }
    } catch(err) {
      alert(err)
    }
  }

  return (
    <>
  <section className="section">
    <div className="box h-4/5 content-center justify-center divide-y py-12 lg:py-0 lg:divide-x lg:divide-y-0 lg:justify-between">
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

  {/* push up window start */}

  <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 ${done ? "bg-green-100" : "bg-red-100"}`}>
                    { done ?
                    <BadgeCheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    :
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    }
                    </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {done ? slice.primary.pu_done_title : slice.primary.pu_error_tile}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      {done ? slice.primary.pu_done_desc : slice.primary.pu_error_desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={`mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ${done ? "focus:ring-green-500" : "focus:ring-red-500"}`}
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  {done ? slice.primary.pu_button : slice.primary.pu_button}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>

    {/* push up window end */}

  </>
  );
}

export default EmailSignup;
