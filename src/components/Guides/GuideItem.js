import { useState } from "react";

const GuideItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-md font-[700] leading-7 lg:text-lg">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-softColor border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid rounded flex items-center justify-center `}
        >
          {isOpen ? <i class="ri-close-line" /> : <i class="ri-add-line" />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-md leading-6 lg:text-lg lg:leading-7 font-[400] text-gray-600">
            {item.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default GuideItem;
