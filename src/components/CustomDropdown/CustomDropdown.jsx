import React from "react";
import "./CustomDropdown.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const CustomDropdown = ({
  selectedValue,
  dropDownItems,
  placeholder,
  onSelect,
  labelName,
}) => {
  return (
    <div className="mb-2 customDropdown">
      {labelName && <p className="labelTxt">{labelName}</p>}
      {["Primary"].map((evt) => (
        <DropdownButton
          key={evt}
          id={`dropdown-variants-${evt}`}
          variant={evt.toLowerCase()}
          title={selectedValue || placeholder}
          onSelect={(evt) => onSelect(evt)}
          className={selectedValue ? "selected" : ""}
        >
          <div className="dropdownData">
            {dropDownItems.map((item) => {
              return <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>;
            })}
          </div>
        </DropdownButton>
      ))}
    </div>
  );
};

export default CustomDropdown;
