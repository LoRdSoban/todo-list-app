import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
        {/*TODO: Add profile picture here*/}
        <img 
          src="https://st.depositphotos.com/1779253/5140/v/450/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header; 