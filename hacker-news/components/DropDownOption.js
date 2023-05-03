// This is a functional component that represents a single option in a dropdown menu.
import React from "react";

const DropDownOption = (props) => {
  return (
    <li>
      <a
        data-testid="storiesOption"
        // This onClick handler function calls the parent component's setOption and toggleDropdown functions with the selected option.
        onClick={() => {
          props.setOption(props.option);
          props.toggleDropdown();
        }}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {props.option.charAt(0).toUpperCase() +
          props.option.slice(1).replace("stories", " Stories")}
        {/* This capitalizes the first letter of the option and replaces "stories" with " Stories" for better readability */}
      </a>
    </li>
  );
};

export default DropDownOption;
