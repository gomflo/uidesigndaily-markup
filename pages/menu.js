
export default function Menu() {

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-pink-50 to-indigo-50 min-h-screen">
      <div className="p-10 my-20 rounded-lg bg-white shadow-xl w-2/3">
        <div className="flex flex-col md:flex-row justify-between">
          <form className="relative">
            <label htmlFor="search" className="sr-only">Buscar</label>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute top-0 bottom-0 left-3 m-auto" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input className="rounded-md pl-10 border border-gray-300" type="text" id="search" placeholder="Search" />
          </form>

          <div className="flex items-center space-x-9 text-gray-800">
            <div className="flex space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Cart</span>
            </div>

            <a>Suscribe</a>

            <button className="p-3 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-5 h-px w-full bg-gray-300"></div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold">Reviews</h3>
            <div className="bg-pink-400 w-12 h-[2px] mb-2 -ml-0.5"></div>
            <p className="text-gray-700">Real reviews of all your favourite products.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Nature</h3>
            <div className="bg-purple-400 w-12 h-[2px] mb-2 -ml-0.5"></div>
            <p className="text-gray-700">We cover all things climate, science and enviroment.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Science</h3>
            <div className="bg-indigo-400 w-12 h-[2px] mb-2 -ml-0.5"></div>
            <p className="text-gray-700">Real reviews of all your favourite products.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Entertainment</h3>
            <div className="bg-yellow-400 w-12 h-[2px] mb-2 -ml-0.5"></div>
            <p className="text-gray-700">The top news about comics and fantasy.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Tech guide</h3>
            <div className="bg-blue-400 w-12 h-[2px] mb-2 -ml-0.5"></div>
            <p className="text-gray-700">A guide to gadgets and how to make them work for you.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Video</h3>
            <div className="bg-green-400 w-12 h-[2px] mb-2 -ml-0.5"></div>
            <p className="text-gray-700">All of our platform's video coverage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}