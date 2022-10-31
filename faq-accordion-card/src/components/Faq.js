import React from "react";

const Faq = (props) => {

  const toggle = () => {
    props.toggleFaq(props.id)
  }

  return (
    <div className="accordion-bottom-structure">
        <div className="single-item-content">
          <span className={!props.open ? "text-normal" : "text-bold"}>
            {props.title}
          </span>
          <span
            className={
              !props.open ? "description-not-show" : "description-show"
            }
          >
            {props.description}
          </span>
        </div>

        {!props.open ? (
          <button onClick={toggle} className="button-icon-down">
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 .799l4 4 4-4"
                stroke="#F47B56"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button onClick={toggle} className="button-icon-up">
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 .799l4 4 4-4"
                stroke="#F47B56"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
  );
};

export default Faq
