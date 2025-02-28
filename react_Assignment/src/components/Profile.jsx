import React from 'react'

export const Profile = ({ name, email }) => {
    return (
      <div className="border p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Profile</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
  
  export default Profile;
  
