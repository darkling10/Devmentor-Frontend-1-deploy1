import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <div className="bg-white rounded-xl w-full p-2.5 flex flex-col items-center justify-evenly ">
    <div className="bg-img min-h-[20vh] w-full rounded-md pb-10 ">
     <div className="bg-black/10 flex  px-5 rounded-md justify-center items-center backdrop-blur-md w-full py-5">
     <img alt="python" className="w-8 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
     <h1 className="font-semibold text-md text-white mx-5">Zero To Mastery Python Bootcamp</h1>
    </div>          
    </div>
    <p className="text-sm my-2.5 text-black/50">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt culpa aliquid esse quidem obcaecati dolorum eos nulla debitis molestiae porro.
    </p>
    <Link to={'/courses/1'} className="w-full">
    <button className="bg-primary rounded-md w-full p-2.5 text-white hover:bg-dark-primary">View Detailed Review</button>
    </Link>
    </div>
  );
};
export default Card;
