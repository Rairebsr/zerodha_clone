import React, { useState } from "react";

const TeamMember = ({ name, role, image, bio }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="text-center mb-12">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <button
        onClick={() => setShowBio(!showBio)}
        className="text-blue-500 mt-2"
      >
        {showBio ? "Hide Bio" : "Bio"} ▼
      </button>
      {showBio && <p className="mt-2 text-gray-700">{bio}</p>}
    </div>
  );
};

export default TeamMember;
