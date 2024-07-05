import React, { useState } from 'react';

const UserList = ({ users, onAddUser }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleAddUser = () => {
    if (newUser.name.trim() === '' || newUser.email.trim() === '') {
      setError('Name and email cannot be empty');
      return;
    }

    onAddUser(newUser);
    setNewUser({ name: '', email: '' });
    setShowModal(false);
    setError('');
  };

  const handleNameChange = (e) => {
    setNewUser({ ...newUser, name: e.target.value });
    setError('');
  };

  const handleEmailChange = (e) => {
    setNewUser({ ...newUser, email: e.target.value });
    setError('');
  };

  return (
    <div style={styles.content}>
      <div style={styles.addUserContainer}>
        <h2>User List</h2>
        <button onClick={() => setShowModal(true)} style={styles.addButton}>Add User</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{user.name}</td>
              <td style={styles.tableCell}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div style={styles.modal}>
          <h3>Add New User</h3>
          <input
            type="text"
            value={newUser.name}
            onChange={handleNameChange}
            placeholder="Name"
            style={styles.input}
          />
          <input
            type="email"
            value={newUser.email}
            onChange={handleEmailChange}
            placeholder="Email"
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.modalButtons}>
            <button onClick={handleAddUser} style={styles.modalButton}>Add</button>
            <button onClick={() => setShowModal(false)} style={styles.modalButton}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  content: {
    marginLeft: '200px',
    padding: '0px',
  },
  addUserContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    backgroundColor: '#f4f4f4',
    zIndex: '1000',
    padding: '0px 20px',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  tableHeader: {
    padding: '12px',
    backgroundColor: '#f4f4f4',
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    fontSize: '16px',
  },
  tableCell: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    fontSize: '16px',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    zIndex: '1000',
    width: '300px',
  },
  input: {
    width: '94%',
    padding: '8px',
    fontSize: '16px',
    marginBottom: '5px',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  },
  modalButton: {
    marginLeft: '10px',
    marginTop:'5px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
};

export default UserList;
