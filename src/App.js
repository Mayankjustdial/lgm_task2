import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  const loadUsers = async () => {
    setloading(true);

    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    setloading(false);
  };

  return (
    <>
      {" "}
      <div className="App">
        <div className="top">
          <h1 className="logo">LGMVIP</h1>
          <button className="button" onClick={loadUsers}>
            Get Users
          </button>
        </div>
        {loading ?
        (
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="Loading.."
          className="loader"
        />
        ):("")
        }
        
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="project parent">
            <div className="profile">
              <div className="profile-picture">
                <img src={avatar} alt="{avatar}" className="img" />
              </div>
              <hr className="hr" />
              <div className="name-tag">
                <h1 className="name">
                  {" "}
                  {first_name} {last_name}
                </h1>
              </div>
              <p className="email">email:{email}</p>
              <div className="id-tag">
                <p className="id">id:{id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      ;
      <footer>
      <div >
        copyright &copy; Task-2 (created by Mayank) All rights reserved!
      </div>
    </footer>
    </>
  );
}

export default App;
