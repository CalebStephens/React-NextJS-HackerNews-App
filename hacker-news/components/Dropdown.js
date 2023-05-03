/*
    Dropdown component that displays a dropdown menu with the following options:
    - New Stories
    - Top Stories
    - Best Stories
    - Ask Stories
    - Show Stories
    - Job Stories
    When an option is clicked, the dropdown menu should close and the Stories component should display the corresponding stories.
*/

import React, { useState } from "react";
import DropDownOption from "./DropDownOption";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false); // dropdown toggle

  // When called toggles the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        data-testid="dropdown-toggle"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Choose Story Type
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-0 mt-2"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {/* Each menu item calls the parent component's setOption and toggleDropdown functions with the selected option */}
            <DropDownOption
              setOption={props.setOption}
              toggleDropdown={toggleDropdown}
              option={"askstories"}
            />
            <DropDownOption
              setOption={props.setOption}
              toggleDropdown={toggleDropdown}
              option={"beststories"}
            />
            <DropDownOption
              setOption={props.setOption}
              toggleDropdown={toggleDropdown}
              option={"jobstories"}
            />
            <DropDownOption
              setOption={props.setOption}
              toggleDropdown={toggleDropdown}
              option={"newstories"}
            />
            <DropDownOption
              setOption={props.setOption}
              toggleDropdown={toggleDropdown}
              option={"showstories"}
            />
            <DropDownOption
              setOption={props.setOption}
              toggleDropdown={toggleDropdown}
              option={"topstories"}
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
