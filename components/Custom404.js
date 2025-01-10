export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-mainColor mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      Oops! Look like&apos;s something going wrong
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Page Cannot be found! We will have it figured out in no time. <br />
        Meanwhile, check out these fresh ideas:
      </p>
      <button className="px-6 py-2 bg-mainColor text-white rounded-md shadow-md hover:bg-yellow-600">
        Go to home
      </button>
    </div>
  );
}
