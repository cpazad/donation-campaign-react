import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-extrabold text-red-500">404</h1>
          <h1 className="text-3xl font-bold my-5">Sorry there</h1>
          
          <Link to="/">
            <button className="btn btn-success">Get back to Home </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
