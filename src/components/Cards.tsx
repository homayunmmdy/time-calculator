import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { CardsType } from "../types/entinites";
import Card from "./Card";

const Cards = () => {
  const { t } = useTranslation();
  const CardsData: CardsType[] = [
    { title: `${t("cards.1")}`, icon: <FaWhatsapp />, href : "/whatsapp-link-generator" }
  ];
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {CardsData.map((card) => (
        <Card data={card} />
      ))}
    </section>
  );
};

export default Cards;