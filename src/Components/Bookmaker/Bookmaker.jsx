import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


const Bookmaker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" z-10 relative px-16">
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded  bg-[#205583] text-white mt-4 px-3"
      >
        <div
          className="collapse-plus p-2 flex justify-between items-center"
          onClick={toggleCollapse}
        >
          <h2>1XBET ONLINE BOOKMAKER LOG IN</h2>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isOpen && (
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        )}
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded  bg-[#205583] text-white px-3 mt-5"
      >
        <div
          className="collapse-plus p-2 flex justify-between items-center"
          onClick={toggleCollapse}
        >
          <h2>1XBET ONLINE BOOKMAKER LOG IN</h2>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isOpen && (
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        )}
      </div>


     
    </div>
  );
};

export default Bookmaker;
