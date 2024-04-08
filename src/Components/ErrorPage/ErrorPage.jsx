import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[100vh] w-full">
     <h1 className="text-5xl text-red-600">Opps!</h1>
     <p className="text-xl">You are lost.</p>
     
     <p>And the item was 
        <i className="text-red-600"> {error.statusText || error.message}</i>
      </p>
      <button className="btn btn-primary">
       <Link to='/'> Go to Home</Link></button>
    </div>
  );
};

export default ErrorPage;