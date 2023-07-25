import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
const Questions = ({ id, info, title }) => {
  const [isToggle, setIsToggle] = useState(false);
  const onBtnClick = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn" onClick={onBtnClick}>
          {isToggle ? <BiMinusCircle /> : <BsFillPlusCircleFill />}
        </button>
      </header>

      <p>{isToggle && info}</p>
    </div>
  );
};
export default Questions;
