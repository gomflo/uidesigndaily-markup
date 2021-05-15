
export default function Modal() {

  return (
    <div className="bg-indigo-50 h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg w-4/12 relative">

        <div className="flex justify-end mb-5">
          <button className="flex items-center justify-center bg-indigo-100 w-12 h-12 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <h3 className="pr-20 text-xl font-bold text-gray-800">Your component has been published</h3>

        <div className="mt-10 flex space-x-10 border-b-2 border-gray-300 pb-5 font-medium text-gray-700">
          <a href="#">Embed code</a>
          <a href="#" className="relative">
            Share link
            <div className="h-1.5 rounded-md bg-black absolute top-[42px] w-full">&nbsp;</div>
          </a>
        </div>

        <div className="mt-10">
          <h4>Start using your component by copying the web address below.</h4>

          <form className="mt-5 flex">
            <label htmlFor="web" className="sr-only">Web address</label>
            <input name="web" id="web" className="border px-3 py-3 rounded-md focus:outline-none flex-grow mr-1" placeholder="https://futbolfeed.com/XHA23Z" />
            <button className="bg-black text-white px-5 rounded-md">Copy</button>
          </form>

          <a href="#" className="underline text-xs font-medium mt-2 block">Preview link in new tab</a>

          <div className="flex items-center space-x-3 mt-10 mb-10">
            <div className="h-5 w-5 border border-gray-500 rounded-md"></div>
            <div>Don't show this again</div>
          </div>
        </div>
      </div>
      <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-600 w-96 rounded-md rounded-t-none">&nbsp;</div>

      <a className="block text-gray-400 mt-20 text-xs" href="https://www.uidesigndaily.com/posts/studio-modal-pop-up-share-link-day-1353">https://www.uidesigndaily.com/posts/studio-modal-pop-up-share-link-day-1353</a>
    </div>
  )
}