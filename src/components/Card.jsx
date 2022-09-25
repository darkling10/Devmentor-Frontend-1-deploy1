import cardRectangle from "../assets/Images/card_rectangle.svg";

const Card = () => {
  return (
    <div className="bg-white rounded-xl h-[25rem] w-96 flex flex-col items-center justify-evenly mx-10">
      
        <img src={cardRectangle} alt="" className="w-[21rem]"/>
      
      <p className="mx-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
        dignissim enim cum proin gravida ultricies odio et. Id porta sed non,
      </p>
      <div className=" px-5 py-2 bg-blue-600 w-auto text-xl rounded-xl text-white  mx-10">
        View Detailed Review
      </div>
    </div>
  );
};
export default Card;
