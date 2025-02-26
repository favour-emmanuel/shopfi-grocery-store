import { FC } from "react";

interface PopularOnStoreCardProps {
  title: string;
  image?: string;
  bgColor?: string;
}

const PopularOnStoreCard: FC<PopularOnStoreCardProps> = ({
  title,
  image,
  bgColor,
}) => {
  return (
    <div
      className={`py-3 px-2 w-full flex flex-col items-center cursor-pointer rounded-xl max-w-[14rem] ${bgColor}`}
    >
      <h1 className="text-xl font-normal mt-5 hover:text-appGreen hover:duration-300">
        {title}
      </h1>
      <div className="h-[10rem] w-full flex justify-center items-center relative">
        <img
          src={image}
          alt={title}
          className="mb-6 object-cover hover:scale-110 duration-300 transition-transform"
        />
      </div>
    </div>
  );
};

export default PopularOnStoreCard;
