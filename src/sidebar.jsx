import React from 'react';

const Sidebar = ({ name, users, onNavChange, onUserChange, selectedUser }) => {
  const handleNavChange = (section) => {
    onNavChange(section);
  };

  return (
    <div style={styles.sidebar}>
      <div>
        <h2 style={styles.name}>{name}</h2>
        <div style={styles.nav}>
          <button style={styles.link} onClick={() => handleNavChange('Home')}>Home</button>
          <button style={styles.link} onClick={() => handleNavChange('Users')}>Users</button>
        </div>
      </div>
      <div style={styles.dropdown}>
        {onUserChange && (
          <label htmlFor="user-select" style={styles.label}>Select User:</label>
        )}
        <select id="user-select" value={selectedUser} onChange={(e) => onUserChange(e.target.value)} style={styles.select}>
          {users.map((user) => (
            <option key={user.name} value={user.name}>{user.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '200px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  link: {
    margin: '10px 0',
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  dropdown: {
    marginTop: 'auto',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px'
  },
  select: {
    width: '100%',
    padding: '8px',
    fontSize: '16px'
  }
};

export default Sidebar;
