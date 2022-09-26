import {Link} from 'react-router-dom'

const Card = ({data}) => {
  console.log(data)
  return (
    <div className="bg-white rounded-xl w-[100%] p-2.5 flex flex-col items-center justify-between ">
    <div className="bg-img min-h-[20vh] w-full rounded-md pb-5 ">
     <div className="bg-black/10 flex  px-5 rounded-md justify-start items-center backdrop-blur-md w-full py-5">
     <img alt={`${data.language.toLowerCase()}`}className="w-8 " src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${data.language.toLowerCase()}/${data.language.toLowerCase()}-original.svg`} />
     <h1 className="font-semibold text-md text-white mx-5">{data.title}</h1>
    </div>   
     <p className='pt-5 px-2.5 text-white font-semibold'><i class='bx bxs-category'></i> {data.category}</p>       
    </div>
    <p className="text-sm my-2.5 text-black/50">
       {
        data.description.slice(0 , 120).concat(' ...')
       }
    </p>
    <Link to={`/courses/${data._id}`} className="w-full">
    <button className="bg-primary rounded-md w-full p-2.5 text-white hover:bg-dark-primary">View Detailed Review</button>
    </Link>
    </div>
  );
};
export default Card;
