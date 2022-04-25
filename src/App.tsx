import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Lists from "./Lists";

export interface User {
  body: string;
  id?: number;
  title?: string;
  userId?: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <h1>list of users</h1>
      <Lists data={users} />
    </div>
  );
}

export default App;
