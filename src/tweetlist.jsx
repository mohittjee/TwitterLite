import React, { useState } from 'react';

const TweetList = ({ users, tweets, selectedUser, onAddTweet }) => {
  const [newTweet, setNewTweet] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAddTweet = () => {
    onAddTweet(selectedUser, newTweet);
    setNewTweet('');
    setShowModal(false);
  };

  const sortedTweets = tweets.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <h2>Tweets
      <button onClick={() => setShowModal(true)} style={styles.addButton}>Add Tweet</button></h2>
      {sortedTweets.map((tweet, index) => (
        <div key={index} style={styles.tweetCard}>
          <div style={styles.tweetUser}>{tweet.user}</div>
          <div style={styles.tweetContent}>{tweet.content}</div>
        </div>
      ))}

      {showModal && (
        <div style={styles.modal}>
          <h3>Add New Tweet</h3>
          <input
            type="text"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            placeholder="Type a new tweet"
            style={styles.input}
          />
          <div style={styles.modalButtons}>
            <button onClick={handleAddTweet} style={styles.modalButton}>Add</button>
            <button onClick={() => setShowModal(false)} style={styles.modalButton}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    float: 'right',
  },
  tweetCard: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px'
  },
  tweetUser: {
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  tweetContent: {
    fontSize: '16px'
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
    width: '300px'
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginBottom: '10px'
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px'
  },
  modalButton: {
    marginLeft: '10px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default TweetList;
