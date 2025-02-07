'use client';

import { FormEvent, useState } from 'react';

export function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`/api/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: email,
        fullName: name,
        phone,
        message,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          alert('Something went wrong, please try again later.');
        }
      })
      .catch(() => {
        alert('Something went wrong, please try again later.');
      });
  }

  return (
    <section id="contact" className="flex flex-row bg-slate-100 text-white py-12 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-32">
            <div>
              <form onSubmit={onSubmit} className="space-y-4 w-5/6">
                <input
                  value={name}
                  onChange={ e => setName(e.target.value) }
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                />
                <input
                  value={email}
                  onChange={ e => setEmail(e.target.value) }
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                />
                <input
                  value={phone}
                  onChange={ e => setPhone(e.target.value) }
                  type="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                />
                <textarea
                  value={message}
                  onChange={ e => setMessage(e.target.value) }
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 rounded text-black h-32"
                ></textarea>
                <div className="flex pl-4 justify-start md:justify-end">
                  <button
                    type="submit"
                    className="bg-dark-blue text-white px-6 py-3 rounded hover:bg-blue-950"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold underline text-black">Contact Info</h2>
              <h3 className="text-lg font-bold text-black "><a href="mailto:sales@yachtingsolutionsinc.com" className="hover:underline">sales@yachtingsolutionsinc.com</a></h3>
              <h3 className="text-lg font-bold text-black pt-5">289-241-8164</h3>
            </div>
          </div>
        </div> 
    </section>
  );
};