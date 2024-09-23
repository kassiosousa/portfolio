import React from 'react';

const Profile = ({pt}) => {
  return (
    <div className={`pt-${pt}`}>
        <img 
            src="/profile.jpg" 
            alt="Foto de Perfil" 
            className="object-cover h-full rounded-lg" 
            style={{ height: 'calc(350px + 60px + 15px + 6px)' }} 
        />
    </div>
  );
};

export default Profile;
