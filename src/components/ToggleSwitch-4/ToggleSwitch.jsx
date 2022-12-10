import { useState } from "react";
import classNames from "classnames";

const ToggleSwitch4 = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={classNames(
        "bg-gray-200 flex h-6 w-[44px] cursor-pointer flex-row-reverse items-center rounded-full border border-gray-200 p-[1px]",
        {
          "bg-green-400 transition-all duration-700": isSelected,
        }
      )}
    >
      <span
        className={classNames(
          "h-[20px] w-[20px] rounded-full bg-gray-100 tansition-all duration-500 shadow-lg",
          {
            " mr-5": isSelected,
          }
        )}
      />
    </div>
  );
};

export default ToggleSwitch4;
