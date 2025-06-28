"use client";
import { Meteors } from '@/components/ui/meteors';
import React, { FormEvent, useState } from 'react';



const page = () => {

      const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };


    return (
      <div className="relative max-w-screen   h-screen ">
        <Meteors number={100}/>
         <h1 className="text-lg md:text-6xl pt-36 text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        
        <div className=' flex items-center justify-center bg-gray-900  lg:mx-96' >
        <form onSubmit={handleSubmit} className="space-y-4 my-4 ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
            </div> 
 
      </div>
  )
}

export default page