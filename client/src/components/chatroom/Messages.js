import React from "react";

function Messages(props) {
  const { mssgList } = props;
  const newList = mssgList.map(item => {
    const id = mssgList.indexOf(item);
    return (
      <p key={id}>
        <span className="teal-text text-darken-2">{item.name}: </span>
        <span className="mssg-text cyan lighten-5">{item.message}</span>
      </p>
    );
  });
  return <div>{newList}</div>;
}

export default Messages;
