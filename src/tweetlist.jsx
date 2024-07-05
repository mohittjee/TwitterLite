import React, { useState } from 'react';

const TweetList = ({ users, tweets, selectedUser, onAddTweet }) => {
  const [newTweet, setNewTweet] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleAddTweet = () => {
    if (newTweet.trim() === '') {
      setError('Tweet is empty');
      return;
    }
    onAddTweet(selectedUser, newTweet);
    setNewTweet('');
    setShowModal(false);
    setError('');
  };

  const sortedTweets = tweets.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div style={styles.content}>
      <div style={styles.addTweetContainer}>
        <h2>Tweets</h2>
        <button onClick={() => setShowModal(true)} style={styles.addButton}>Add Tweet</button>
      </div>
      <div style={styles.tweetListContainer}>
        {sortedTweets.map((tweet, index) => (
          <div key={index} style={styles.tweetCard}>
            <div style={styles.tweetContent}>{tweet.content}</div>
            <div style={styles.tweetUser}>~ {tweet.user}</div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={styles.modal}>
          <h3>Add New Tweet</h3>
          <input
            type="text"
            value={newTweet}
            onChange={(e) => {
              setNewTweet(e.target.value);
              if (error) setError('');
            }}
            placeholder="Type a new tweet"
            style={styles.input}
          />
          {error && <div style={styles.error}>{error}</div>}
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
  content: {
    marginLeft: '200px',
  },
  addTweetContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    backgroundColor: '#f4f4f4',
    zIndex: '1000',
    padding: '0 20px',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  tweetListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tweetCard: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    width: '48%',
    boxSizing: 'border-box',
    height: '150px',
    overflowY: 'auto',
  },
  tweetUser: {
    fontWeight: 'bold',
    marginTop: '10px',
    color: 'grey',
  },
  tweetContent: {
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
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
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
};

export default TweetList;
