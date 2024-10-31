import { CardsType } from "../types/entinites";

const Card = ({ data }: { data: CardsType }) => {
  return (
    <>
      <div className="cur group card cursor-pointer border border-white shadow-md hover:border-red-700">
        <div className="card-body items-center text-center">
          <span className="card-title group-hover:text-red-700">{data.icon}</span>
          <h2 className="group-hover:text-red-700">{data.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
