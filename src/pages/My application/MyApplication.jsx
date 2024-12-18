import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContext";

const MyApplication = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `http://localhost:5000/user-applications?email=${user.email}`
      );
      const data = await response.json();
      setData(data);
    };
    loadData();
  }, [user.email]);
  return (
    <>
      <div className="overflow-x-auto max-w-screen-2xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>company</th>
              <th>Job title</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((singleData) => (
              <>
                <tr key={singleData._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={singleData.logo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{singleData.company}</div>
                        <div className="text-sm opacity-50">{singleData.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {singleData.title}
                    <br />
                  </td>
                  <td>{singleData.status}</td>
                  <th>
                    <button className="btn btn-warning">details</button>
                  </th>
                </tr>   
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyApplication;
