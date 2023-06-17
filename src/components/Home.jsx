import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className=" px-2 py-40 md:px-8 md:py-32">
      <div className=" text-white  bg-indigo-600 text-3xl font-bold  rounded-lg shadow-lg pl-16 py-40 md:py-60">
        <p className="md:inline-block">Welcome to the Home Page</p>{' '}
        <Link to="/home">
          <button
            onClick={() => props.onGo()}
            className="rounded my-12 md:my-0 md:mx-12 shadow-lg py-2 px-2 md:px-4 text-indigo-600 bg-slate-200 hover:bg-slate-100 focus:translate-y-1"
          >
            Let's Go !
          </button>
        </Link>
      </div>{' '}
    </div>
  );
}

export default Home;
