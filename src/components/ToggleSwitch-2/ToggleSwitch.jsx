import { useState } from "react";
import classNames from "classnames";

const ToggleSwitch2 = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={classNames(
        "bg-gray-200 flex h-6 w-[44px] cursor-pointer flex-row-reverse items-center rounded-full border border-white p-[1px]"
      )}
    >
      <span
        className={classNames(
          "h-[20px] w-[20px] rounded-full bg-gray-100 tansition-all duration-500 shadow-lg",
          {
            "bg-indigo-800 mr-5": isSelected,
          }
        )}
      />
    </div>
  );
};

export default ToggleSwitch2;
