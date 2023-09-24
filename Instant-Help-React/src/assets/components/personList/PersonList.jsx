import React from "react";

const PersonList = ({ person }) => {
  return (
    <div>
      {/* <h1>Name Is: {personInfo.name}</h1>
        <h1>Mobile Is : {personInfo.mobile}</h1> */}
      {/* Access the 'mobile' prop in the same way */}
      <div className="overflow-x-auto">
        <table className="table w-5">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th> Experienced From </th>
              <th>Mobile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.freepik.com/free-photo/pink-rose-frame-floral-oval-badge_53876-101264.jpg?w=996&t=st=1695497627~exp=1695498227~hmac=7040b2974b6e61b89307eb3a3fc64e00c12c74fd6917882ad879f14b58c0dd40"
                          alt=" "
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {person.name}</div>
                      {/* display name and profession  */}
                      <div className="text-sm opacity-50">
                        {" "}
                        {person.profession}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {person.details}
                  {/* Here display the detais of desired person  */}
                  <br />
                </td>
                <td>{person.experienceDate}</td>
                <td> {person.mobile} </td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {" "}
                    <a target="_blank" href={person.facebookId}>
                      {" "}
                      details{" "}
                    </a>
                  </button>
                </th>
              </tr>
           
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PersonList;
