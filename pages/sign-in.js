

export default function Signin() {

  return (
    <>
      <div className="bg-blue-600 w-96 h-4/5 inset-0 m-auto absolute -right-48 rounded-xl"></div>
      <div className="min-h-screen flex justify-center items-center bg-blue-50">
        <div className="p-16 rounded-xl bg-white w-4/12 z-0">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>

          <form className="mt-10">
            <div className="flex flex-col text-gray-700">
              <label htmlFor="username" className="font-semibold">Username or email</label>
              <input className="rounded-md mt-1 py-3 border border-gray-400" type="text" id="username" />
            </div>

            <div className="flex flex-col text-gray-700 mt-5">
              <label htmlFor="password" className="font-semibold">Password</label>
              <input className="rounded-md mt-1 py-3 border border-gray-400" type="password" id="password" />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <button className="px-10 py-4 rounded-full bg-blue-600 text-white">Sign in</button>
              <a href="#" className="font-semibold text-gray-700">Forgot your password?</a>
            </div>
          </form>

          <div className="mt-10 text-gray-700 text-center font-semibold">
            Don't have an account? <br /> <a href="#" className="underline">Sign up</a>
          </div>
        </div>
      </div>
    </>
  )
}