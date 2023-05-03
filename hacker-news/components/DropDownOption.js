import React from 'react'

const DropDownOption = (props) => {
  return (
    <li>
        <a
        data-testid="storiesOption"
        onClick={() => {
        props.setOption(props.option);
            props.toggleDropdown();
        }}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
       {props.option.charAt(0).toUpperCase() + props.option.slice(1).replace("stories", " Stories")}
        </a>
    </li>
  )
}

export default DropDownOption
