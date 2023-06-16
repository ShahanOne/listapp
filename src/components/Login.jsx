function Login(props) {
  return (
    <div className="grid md:grid-cols-2 px-2 py-40 md:px-80 md:py-44">
      <div className=" text-white  bg-indigo-600 text-3xl font-bold  rounded-lg shadow-lg pl-16 py-16 md:py-44">
        Login to continue
      </div>

      <div className="bg-slate-100 rounded shadow-lg px-6 py-20">
        <label className="block text-xl" htmlFor="userName">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          className="my-2 block w-3/4 rounded bg-gray-200"
          type="text"
          id="userName"
        />

        <label className="block text-xl" htmlFor="password">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          className="my-2 block w-3/4 rounded bg-gray-200"
          type="password"
          id="password"
        />

        <button
          onClick={props.clicked}
          className="rounded block shadow-lg my-4 py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-500 focus:translate-y-1"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
