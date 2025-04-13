import React from 'react';

const UserInfo = () => {
    const styles = {
        container: {
            textAlign: 'center',
            margin: '20px 0'
        },
        name: {
            fontSize: '24px',
            fontWeight: 'bold'
        },
        email: {
            color: '#666'
        },
        bio: {
            marginTop: '10px'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>Dhruv Gadre</h2>
            <p style={styles.email}>dhruv.gadre2023@vitstudent.ac.in</p>
            <p style={styles.bio}>The king of web dev</p>
        </div>
    );
};

export default UserInfo;
