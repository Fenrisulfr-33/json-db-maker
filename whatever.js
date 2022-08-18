

import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

export default function App() {
  const [users, setUsers] = useState([]),
  [currentUser, setCurrentUser] = useState(null),
  [albums, setAlbums] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}
    useEffect(() => {
    const signal = new AbortController().signal;
    const loadUser = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users",  { signal, });
        const userFromAPI = await response.json();
        setUsers(userFromAPI);
        const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums`, { signal, });
        const albumFromAPI = await albumResponse.json();
        setAlbums(albumFromAPI);
      } catch (error) {
        console.log(error)
      }
    }
    loadUser();
    document.title = 'Awesome Album App'
  }, []);

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList albums={albums} user={currentUser} />
      </div>
    </div>
  );
}


export default function AlbumList({ albums, user }) {
  if (albums.length) {
    return (
      <React.Fragment>
        {user.name && <h1>{user.name} Albums</h1>}
        <ul className="albums-list">
          {albums.filter((album) => album.id === user.id)
          .map((album) => (<li key={album.id}>{album.id} - {album.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  } else {
    return <p>Please click on a user name to the left</p>;
  }
}

export default function UserList({ users, setCurrentUser }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => setCurrentUser(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}