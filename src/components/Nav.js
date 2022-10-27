import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import logoAnimation from "../assets/animations/logoAnimation.json";
import img from "../assets/images/logo-title.jpg";
import "../styles/Nav.css";
import { AuthContext } from "../Contexts/UserContext";
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false)
  console.log(open)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
    .catch(error=>console.error(error))
  }
  return (
    <div>
      <div className="shadow-lg md:flex items-center justify-between md:px-20">
        <div className="flex items-center justify-between px-5">
          <Link to='/' className=" flex items-center ">
            <Lottie
              className="mt-5 mr-2"
              style={{ width: "50px" }}
              animationData={logoAnimation}
            />
            <img src={img} alt="" />
          </Link>
          <AiOutlineMenu onClick={()=>setOpen(!open)} className="mt-6 text-4xl md:hidden"/> 
        </div>
        <div className={`lg:flex ${open ? "block":"hidden"}`}>
          <div className="px-10 pb-7 md:pb-0 md:pl-0">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink className="ml-5" to="/courses">
            Courses
          </NavLink>
          <NavLink className="ml-5" to="/FAQ">
            FAQ
          </NavLink>
          <NavLink className="ml-5" to="/blog">
            Blog
            </NavLink>
            {
              user?.uid ?
              <NavLink onClick={handleLogOut} className="ml-5" to="/login">
              Log Out
                </NavLink>
                :
               <NavLink className="ml-5" to="/login">
            Login
          </NavLink> 
            }
          
        </div>
          <input type="checkbox" className="toggle md:ml-5  ml-40"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
