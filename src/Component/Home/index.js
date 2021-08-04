import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/posts");
    console.log(result);
  };

  return (
    <>
      <div className="pay-4">
        <div className="container-fluid">
          <table class="table border shadow ">
            <thead class="thead-dark table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <td>
                    <Link class="btn btn-primary" style={{marginRight:"10px"}}>View</Link>
                    <Link class="btn btn-outline-primary" style={{marginRight:"10px"}}>Edit</Link>
                    <Link class="btn btn-danger">Delete</Link>

                </td>
              </tr>
              {users.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{users.id}</td>
                <td>{users.title}</td>
                <td>{users.author}</td>
                <td>
                    <Link class="btn btn-primary">View</Link>
                    <Link class="btn btn-outline-primary">Edit</Link>
                    <Link class="btn btn-danger">Delete</Link>

                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
