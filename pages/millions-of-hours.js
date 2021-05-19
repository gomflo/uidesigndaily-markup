
function Number(props) {

  return (
    <div className="bg-gray-200 p-3 rounded-lg">
      <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">{props.n}</div>
    </div>
  )
}

export default function MillionsHours() {

  const numbers = [6, 3, ',', 2, 8, 1, ',', 7, 0, 6]

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="px-20 py-28 bg-white max-w-7xl rounded-xl shadow-lg">
        <h1 className="text-gray-800 text-3xl text-center font-semibold">Millions of hours</h1>
        <p className="text-center mt-3 text-gray-600 text-lg">Tracked and invoiced</p>

        <div className="flex items-baseline mt-10 text-5xl space-x-3">

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              6
            </div>
          </div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              3
            </div>
          </div>

          <div className="font-serif">,</div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              2
            </div>
          </div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              8
            </div>
          </div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              1
            </div>
          </div>

          <div className="font-serif">,</div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              7
            </div>
          </div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              0
            </div>
          </div>

          <div className="bg-gray-200 p-3 rounded-lg">
            <div className="bg-white p-3 shadow-lg rounded-lg font-bold text-gray-800">
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}