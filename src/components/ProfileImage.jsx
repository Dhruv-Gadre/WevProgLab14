import React from 'react';
import ben from "../Images/ben10.jpg"

const ProfileImage = () => {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px 0'
    },
    image: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
    }
  };

  return (
    <div style={styles.container}>
      <img 
        src={ben}
        alt="User profile" 
        style={styles.image}
      />
    </div>
  );
};

export default ProfileImage;