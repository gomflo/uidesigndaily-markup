
export default function LanguageSearch() {

  return (
    <div className="bg-indigo-50 pt-20 flex flex-col items-center justify-center w-full">
      <div className="bg-white w-1/2 p-16 rounded-xl shadow-md">
        <h1 className="text-xl text-gray-700 font-bold">Search Settings</h1>

        <div className="mt-5 border border-indigo-100 rounded-md px-4 py-2 inline-flex space-x-3 text-gray-800">
          <a href="#" className="p-3 rounded-md hover:bg-indigo-50">Search results</a>
          <a href="#" className="p-3 rounded-md bg-indigo-100">Languages</a>
          <a href="#" className="p-3 rounded-md hover:bg-indigo-50">Help</a>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold text-gray-800">Which language should our products use?</h3>

          <div className="mt-5 grid grid-cols-4 gap-4 text-gray-800">
            <div className="flex items-center">
              <input type="radio" name="language" id="deutsch" className="mr-2" />
              <label htmlFor="deutsch">German</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="english" checked={true} className="mr-2" />
              <label htmlFor="english">English</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="spanish" className="mr-2" />
              <label htmlFor="spanish">Spanish</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">French</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">Netherlands</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">Polish</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">Italian</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">French</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">French</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">French</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">French</label>
            </div>

            <div className="flex items-center">
              <input type="radio" name="language" id="french" className="mr-2" />
              <label htmlFor="french">Spanish</label>
            </div>

          </div>

          <button className="mt-5 text-purple-600 font-semibold flex items-center text-sm">
            <span>Show more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="p-10 bg-indigo-100 border border-gray-300 rounded-lg mt-10 text-center">
            <h3 className="font-semibold text-gray-700">Currently showing results in?</h3>
            <p className="mt-3 flex space-x-3 items-center justify-center">
              <span className="text-gray-800 font-semibold">English</span>
              <a className="text-purple-600 font-semibold" href="#">Edit</a>
            </p>
          </div>

          <div className="flex justify-end space-x-5 mt-10">
            <button className="px-5 py-3 border border-indigo-100 w-24 rounded-md">Cancel</button>
            <button className="bg-purple-600 text-white px-5 py-3 w-24 rounded-md">Save</button>
          </div>
        </div>
      </div>

      <a className="block text-gray-400 mt-20 text-xs mb-20" href="https://www.uidesigndaily.com/posts/sketch-language-search-radio-button-settings-day-1351">https://www.uidesigndaily.com/posts/sketch-language-search-radio-button-settings-day-1351</a>
    </div>
  )
}