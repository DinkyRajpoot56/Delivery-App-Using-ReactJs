import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../img/logo.png';
import {motion} from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons//md';
import Avatar from '../img/avatar.png' ;
import { link } from "react-router-dom";
import {app} from "../firebase.config";

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = userStatevalue{};
  const [IsMenu, setIsMenu] = usestate(false)

  const login = async {} => {
    if(!user)
    const {
      user : {refreshToken, providerData},
    } = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type:actionType.SET_USER,
      user: providerData[0],
    });
    localStorage.setItem{'user', JSON.stringify(providerData[0])
  }else{
    setIsMenu('isMenu')
  }

  };

  return (
    <header className="fixed z-50 w-screen bg-slate-500 p-3 px-4 md">
     {/*desktop & tablet */}
     <div className="hidden md:flex w-full h-full items-center justify-between">
     <link to = {"/"}  className="flex items-center gap-2">
      <img src={logo} className="w=10 object-cover" alt="logo"/>
        <p className="text-headingColor text-xl font-bold">City</p>
     </link>
     <div className="flex items-center gap-8">
     <motion.ul initial={(opacity:0,x :200)}
     animate={(opacity:1,x :0)} 
     exit={(opacity:0,x :200)} 
      className="flex items-center gap-8 margin-auto">
      <li className="text-base text-textColor hover:text-headingColor duration-100
       transition-all erase-in-out cursor-pointer">Home</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100
       transition-all erase-in-out  cursor-pointer">Menu</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 
      transition-all erase-in-out  cursor-pointer">About Us</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 
      transition-all erase-in-out cursor-pointer ">Services</li>
     </motion.ul>
     <div className="relative flex items-center justify-center">
      <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
      <div className=" absolute top-0 w-6 h-8 rounded-full bg-cartNumbg flex items-center justify-center"></div>
      <p className="text-sm text-white font-semibold"></p>

     </div>
     </div>
     <div className="relative">
     <motion.img
      whileTap={(scale: 0.6)}
      src={user ? user.photoURL : Avatar}
       className="w-40 min-w-[40px] h-40 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
       alt="userprofile" 
       onclick={login}
       />
       {
        IsMenu && {
          <motion.div
          initial={(opacity:0,scale:0.6)}
          animate={(opacity:1,scale:1)}
          exit={(opacity:0,scale:0.6)}
           classname="w-48 bg-primary shadow-u1 rounded-lg flex-col absolute px-4 py-2 top-2 right-0">
        {
          user && user.mail === "retrieval.galaxy@gmail.com" && {
            <link to={"/createItem"},
          }
        }
        <p className="px-4 py-2 flex item-centergap-3 cursor-pointer hover:hg-slate-40
         transition-all duration-100 easi-in-out">
          New Item <MdAdd />
          </p>
          </link>
          </motion.div>
      }}

      <ul className="flex flex-col">
      <li className="text-base text-textColor hover:text-headingColor duration-100
       transition-all erase-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Home</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100
       transition-all erase-in-out  cursor-pointer hover:bg-slate-100 px-4 py-2">Menu</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 
      transition-all erase-in-out  cursor-pointer hover:bg-slate-100 px-4 py-2">About Us</li>
      <li className="text-base text-textColor hover:text-headingColor duration-100 
      transition-all erase-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Services</li>
     </ul>
        <p className="m-2 p-2 rounded-md shadow-md flex item-centergap-3 cursor-pointer hover:hg-slate-300
         transition-all duration-100 easi-in-out text-TextColor text-base
         onclick={logout}">
          Logout <MdLogout /></p>
       </motion.div>
        }
      }
       
    </div>
     </div>
     </div>
      


     {/*mobile*/}
     <div className="flex md:hidden w-full h-full">
     <link to = {"/"}  className="flex items-center justify-center gap-2">
      <img src={logo} className="w=10 object-cover" alt="logo"/>
        <p className="text-headingColor text-xl font-bold">City</p>
     </link>
     }}
     
     <ul className="flex flex-col">
     <li className="text-base text-textColor hover:text-headingColor duration-100
      transition-all erase-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Home</li>
     <li className="text-base text-textColor hover:text-headingColor duration-100
      transition-all erase-in-out  cursor-pointer hover:bg-slate-100 px-4 py-2">Menu</li>
     <li className="text-base text-textColor hover:text-headingColor duration-100 
     transition-all erase-in-out  cursor-pointer hover:bg-slate-100 px-4 py-2">About Us</li>
     <li className="text-base text-textColor hover:text-headingColor duration-100 
     transition-all erase-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Services</li>
    </ul>
       <p className="m-2 p-2 rounded-md shadow-md flex item-centergap-3 cursor-pointer hover:hg-slate-300
        transition-all duration-100 easi-in-out text-TextColor text-base
        onclick={logout}">
         Logout <MdLogout /></p>
      </motion.div>
       }
     }
      </header>
);
  
};

export default Header;