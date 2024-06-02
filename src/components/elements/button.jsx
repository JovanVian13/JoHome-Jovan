import React from "react";

const Button = ({children, margin}) => {
    return (
      <button className={`bg-defaultColor text-white rounded-md transition-all px-4 py-2 ${margin} font-semibold hover:bg-textColor`} type="submit">
        {children}
      </button>
    );
}

export default Button;