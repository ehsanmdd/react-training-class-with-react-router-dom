import axios from "axios";
import React, { useEffect, useState } from "react";

function CreateUsers() {
  const [formData, setFormData] = useState({ name: "", email: "" });
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

   if (formData.email.length || formData.name.length) {
      const newId = users.length + 1;  
      const newUser = { ...formData, id: newId }; 
      setUsers(prevUsers => [...prevUsers, newUser ]);
      setResponse(`User with ID ${newId} was "Added" `)
      setError(null);
      console.log(users); 
    } else {
      setError("Input Fields Is Empty");
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

  const deleteUser = (id) => {
    try {
      setUsers(users.filter((user) => user.id !== id));
      setDeleteResponse(`User with ID ${id} was "deleted" `);
      setError(null);
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
            Name
          </label>
          <input
            className="px-2 focus:outline-0 border-b-2 rounded-lg border-lime-400"
            type="text"
            id="name"
            placeholder="Type Your Name"
            name="name"
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
          <p className="container rounded-lg mt-5 bg-lime-950 text-lime-400 font-bold p-5 m-auto">
            {response}
          </p>
        )}
        {error && (
          <p className="text-rose-400 bg-rose-950 p-5 rounded-lg">{error}</p>
        )}
      </div>

      <div className="container m-auto">
        <ul className="flex flex-row justify-center items-center gap-30 text-white border-1 rounded-lg p-2">

          <li>Id</li>
          <li>Name</li>
          <li>Website</li>
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
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.website}</li>
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
