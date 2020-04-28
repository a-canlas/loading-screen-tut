import React from "react";

function ShowDetail(props) {
  const { name, location, login } = props.details;
  return (
    <div className="center">
      <div className="loaded">Details loaded</div>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
      <div>
        <strong>Location: </strong>
        {location}
      </div>
      <div>
        <strong>Login: </strong>
        {login}
      </div>
    </div>
  );
}

export default ShowDetail;
