import React  from 'react';
import {useState}  from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { isPending } from '@reduxjs/toolkit';
import Modal from './Modal';
import { BiX } from 'react-icons/bi';
import { AiOutlineX} from "react-icons/ai";
 

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    



    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "Services"},
        {path: "/about", link: "About"},
        {path: "/blog", link: "Blogs"},
        {path: "/contact", link: "Contact"},
         
    ]

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closenModal = () => {
        setIsModalOpen(false);
    }


  return (
     <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href='/' className='text-xl font-bold text-white'>mkamba<span className='text-brightColor'>Tech</span></a>

            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white' key={path}>
                        <NavLink className={({isActive, isPending}) => 
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                         to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href='/' className='hover:text-brightColor'><FaGithub /></a>
                <a href='/' className='hover:text-brightColor'><FaLinkedin /></a>
                <a href='/' className='hover:text-brightColor'><AiOutlineX /></a>
                <a href='/' className='hover:text-brightColor'><FaInstagram /></a>
                <button onClick={openModal} className='bg-brightColor px-6 py-2 font-medium rounded hover:bg-white hover:text-brightColor transition-all duration-200 ease-in'>Login</button>
                 
            </div>

            <Modal isOpen={isModalOpen} onClose={closenModal}/>


             <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                {
                isMenuOpen ? <BiX className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                }  
                </button>
             </div>

        </nav>


        <div>
        <ul className=
        {`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navItems.map(({path, link}) => <li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>



     </header>
  )
}

export default Navbar