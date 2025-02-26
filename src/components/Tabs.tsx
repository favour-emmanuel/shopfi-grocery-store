import { FC } from "react";

interface tabProps {
  children: string;
  count: string;
  active: boolean;
  selectedTab: () => {};
}
const Tabs: FC<tabProps> = ({ children, count, selectedTab, active }) => {
  const activeTab = active
    ? "text-black border-b border-b-black"
    : "text-[#A0A2A4]";

  return (
    <div
      onClick={selectedTab}
      className={`${activeTab} flex items-center gap-5`}
    >
      <div className="relative cursor-pointer">
        <div className=" text-white absolute right-0 top-[-1.3rem] bg-appGreen h-6 w-6 rounded-md">
          <span className="flex justify-center items-center text-base font-medium">
            {count}
          </span>
        </div>
        <h3 className="hover: text-xl text-[#A0A2A4]">{children}</h3>
      </div>
    </div>
  );
};

export default Tabs;
