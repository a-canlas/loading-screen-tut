import React from "react";

function ShowDetail(props) {
  const { name, title, birthday } = props.details;
  return (
    <div className="center">
      <div className="loaded">Details loaded</div>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
      <div>
        <strong>Title: </strong>
        {title}
      </div>
      <div>
        <strong>Birthday: </strong>
        {birthday}
      </div>
    </div>
  );
}

export default ShowDetail;
