import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
     <section id="contact" className=" mt-2 flex w-full blockd py-2  hbg-[url('/bgcontact.jpg')] bg-cover bg-center ">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:mt-4 mt-4">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <form
              className="flex-auto p-5 lg:p-10"
              data-aos="fade-up"
            //   onSubmit={handleSubmit}
            >
              <h4 className="text-2xl font-semibold">
                Want to work with us?
              </h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form and we will get back to you in 24 hours.
              </p>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                 htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  name="name"
                //   value={name}
                //   onChange={(e)=>setName(e.target.value)}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Full Name"
                  //   style="transition: all 0.15s ease 0s;"
                  style={{ height: "transition: all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="user_email"
                //   value={email}
                //   onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  //   style="transition: all 0.15s ease 0s;"
                  style={{ height: "transition: all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                   htmlFor="message"
                >
                  Message
                </label>
                <textarea
                //   rows="4"
                //   cols="80"
                  name="message"
                //   value={message}
                //   onChange={(e)=>setMessage(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..."
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                  // onClick={handleSubmit}
                  //disabled={!e.target}
                  //   style="transition: all 0.15s ease 0s;"
                  style={{ height: "transition: all 0.15s ease 0s" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact