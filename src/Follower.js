import React from "react";

const Follower = ({ login, avatar_url }) => {
  return (
    <div className="follower">
      <img src={avatar_url} alt="image" />
      <h4>{login}</h4>
    </div>
  );
};

export default Follower;
