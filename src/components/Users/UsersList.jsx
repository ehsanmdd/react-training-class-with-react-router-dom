import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  const userData = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data));
      
    } catch (error) {
      console.error("Error to Get Users :" + error.message)
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      {!users?.length ? (
        <span className="bg-red-200 text-red-600 p-5 my-40 rounded-lg font-bold w-150 flex justify-center m-auto">
          Error to fetching data: Send a ticket to Customers Support
        </span>
      ) : (
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="top-0 z-10 bg-slate-950 text-white p-3 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-2 shadow-lg">
            <div className="w-full sm:w-1/5 text-center sm:text-left">#</div>
            <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
              Full Name
            </div>
            <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
              Username
            </div>
            <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
              Phone
            </div>
            <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
              Email
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto mt-4">
            <div className="flex flex-col gap-3 text-white">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-gray-800 rounded-lg shadow-md transition duration-100 ease-in-out hover:shadow-lg"
                >
                  <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
                    {user.id}
                  </div>
                  <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
                    {user.name}
                  </div>
                  <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
                    {user.username}
                  </div>
                  <div className="w-full sm:w-1/5 p-2 text-center sm:text-left">
                    {user.phone}
                  </div>
                  <div className="w-full sm:w-1/5 p-2 text-center sm:text-left rounded-lg font-bold">
                    {user.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UsersList;
