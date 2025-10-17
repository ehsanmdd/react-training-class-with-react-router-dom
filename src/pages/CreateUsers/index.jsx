import axios from "axios";
import React, { useEffect, useState } from "react";

function CreateUsers() {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [response, setResponse] = useState(null);
  const [deleteResponse, setDeleteResponse] = useState(null);
  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);

  const handelFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.email.length || formData.username.length) {
        await axios({
          method: "post",
          url: "https://jsonplaceholder.typicode.com/users",
          data: formData,
        }).then((res) => {
          // console.log(res);
          setResponse(res.data);
        });
        setError(null);
      } else {
        setError('Input Filds Is Empty')
      }
    } catch (error) {
      setError("Error Creating User :" + error.message);
      setResponse(null);
    }
  };

  const userData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      });
  };

  const deleteUser = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
      }).then((res) => {
        if (res.status === 200) {
          setDeleteResponse(`User with ID ${id} was "deleted" `);
          setUsers(users.filter((user) => user.id !== id));
          setError(null);
        }
        console.log(res);
      });
    } catch (error) {
      setError("Error Deleting User: " + error.message);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className="container m-auto bg-slate-950 p-5 my-5">
        <span className="text-white font-bold text-3xl">Create User</span>

        <form
          onSubmit={handelSubmit}
          className="text-white flex flex-col justify-center gap-3 mt-5"
        >
          <label className="text-white" htmlFor="username">
            Username
          </label>
          <input
            className="px-2 focus:outline-0 border-b-2 rounded-lg border-lime-400"
            type="text"
            id="username"
            placeholder="Type Your Username"
            name="username"
            value={formData.name}
            onChange={handelFormData}
          />
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className="px-2 focus:outline-0 border-b-2 rounded-lg border-lime-400"
            type="text"
            id="email"
            placeholder="Type Your Email"
            name="email"
            value={formData.email}
            onChange={handelFormData}
          />
          <button
            type="submit"
            className="cursor-pointer px-3 py-1 rounded-lg mt-5 bg-lime-400 text-lime-950 font-bold mb-10"
          >
            Submit
          </button>
        </form>
        {response && (
          <div className="text-white mt-10">
            <h2>Response from Server:</h2>
            <div className="flex flex-row p-10 gap-5">
              <span>{"Id:" + " " + response.id}</span>
              <span>{"Username:" + " " + response.username}</span>
              <span>{"Email:" + " " + response.email}</span>
            </div>
          </div>
        )}
        {error && (
          <p className="text-rose-400 bg-rose-950 p-5 rounded-lg">{error}</p>
        )}
      </div>

      <div className="container m-auto">
        <ul className="flex flex-row justify-center items-center gap-30 text-white border-1 rounded-lg p-2">
          <li>Name</li>
          <li>City</li>
          <li>Phone</li>
          <li>Email</li>
          <li>Action</li>
        </ul>
      </div>

      <div>
        {users.map((user) => (
          <ul
            key={user.id}
            className="flex flex-row justify-center items-center gap-10 text-white"
          >
            <li>{user.name}</li>
            <li>{user.address.city}</li>
            <li>{user.phone}</li>
            <li>{user.email}</li>
            <li>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-rose-500 text-rose-950 font-bold p-1 rounded-lg"
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
        {deleteResponse && (
          <p className="container rounded-lg mt-5 bg-lime-950 text-lime-400 font-bold p-5 m-auto">
            {deleteResponse}
          </p>
        )}
      </div>
    </>
  );
}

export default CreateUsers;
