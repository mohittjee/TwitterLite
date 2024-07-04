import React, { useState} from 'react';
import Sidebar from './sidebar';
import TweetList from './tweetlist';
import UserList from './userList';


const App = () => {
  const initialUsers = [
    { name: 'Varun', email: 'varun@example.com' },
    { name: 'Mohit', email: 'mohit@example.com' },
  ];

  const initialTweets = [
    { user: 'Varun', content: 'Hello from Varun!', timestamp: Date.now() - 180000 },
    { user: 'Mohit', content: 'Hii from Mohit!', timestamp: Date.now() - 360000 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [tweets, setTweets] = useState(initialTweets);
  const [selectedSection, setSelectedSection] = useState('Home');
  const [selectedUser, setSelectedUser] = useState(users[0].name);

  const handleAddTweet = (user, newTweet) => {
    const newTweetObj = {
      user,
      content: newTweet,
      timestamp: Date.now()
    };
    setTweets([...tweets, newTweetObj]);
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleNavChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        name="Twitter"
        users={users}
        selectedUser={selectedUser}
        onNavChange={handleNavChange}
        onUserChange={(user) => setSelectedUser(user)}
      />
      <div style={{ marginLeft: '10px', padding: '20px', flex: 1 }}>
        {selectedSection === 'Home' && (
          <TweetList users={users} tweets={tweets} selectedUser={selectedUser} onAddTweet={handleAddTweet} />
        )}
        {selectedSection === 'Users' && (
          <UserList users={users} onAddUser={handleAddUser} />
        )}
      </div>
    </div>
  );
};

export default App;
