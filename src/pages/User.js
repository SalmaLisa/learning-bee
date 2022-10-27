import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import demoUser from "../assets/images/user-pic.png";
import "../styles/courses.css";

const User = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" ">
      <div className="w-80 mx-auto mt-20">
        <div className="card card-compact w-80 lg:mr-24 shadow-xl bg-base-300 shadow-layer p-10">
          <div className="text-center cursor-pointer">
            {user?.photoURL ? (
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
            ) : (
              <div className="avatar online">
                <div className="w-32 rounded-full">
                  <img src={demoUser} alt="" />
                </div>
              </div>
            )}
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {user?.displayName ? user.displayName : "No name found"}
            </h2>
            <p className="card-text">
              <span className="font-semibold">Email : </span>{" "}
              {user?.email ? user.email : "No email found"}
            </p>
            <p className="card-text">
              <span className="font-semibold">Email Status :</span>{" "}
              {(user?.emailVerified).toString()}
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default User;
