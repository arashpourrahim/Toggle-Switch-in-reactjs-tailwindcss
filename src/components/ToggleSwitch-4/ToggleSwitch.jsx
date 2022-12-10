import { useState } from "react";
import classNames from "classnames";

const ToggleSwitch2 = () => {
  const [isSelected, setIsSelected] = useState(false);

  const className = classNames(
    "h-[20px] w-[20px] rounded-full bg-gray-300 tansition-all duration-500 shadow-lg",
    {
      "bg-indigo-800 mr-5 ": isSelected,
    }
  );
  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className="bg-white flex h-6 w-[44px] cursor-pointer flex-row-reverse items-center rounded-full border border-gray-200 p-[1px]"
    >
      <span className={className} />
    </div>
  );
};

export default ToggleSwitch2;
