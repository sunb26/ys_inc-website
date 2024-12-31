export function Contact() {
  return (
    <section id="contact" className="flex flex-row bg-slate-100 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-32">
            <div>
              <form className="space-y-4 w-5/6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                />
                <input
                  type="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                />
                <textarea
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