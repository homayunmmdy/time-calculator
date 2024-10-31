import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CardsType } from "../types/entinites";

const Card = ({ data }: { data: CardsType }) => {
  const { t } = useTranslation();

  const link = `/${t("meta.lang")}${data.href}`;
  return (
    <>
      <Link
        to={link}
        className="cur group card cursor-pointer border border-white shadow-md hover:border-red-700"
      >
        <div className="card-body items-center text-center">
          <span className="card-title group-hover:text-red-700">
            {data.icon}
          </span>
          <h2 className="group-hover:text-red-700">{data.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default Card;
