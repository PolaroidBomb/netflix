import { useState, useEffect, useRef } from "react"
import {Link} from 'react-router-dom'
import { FaBomb, FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import SearchBar from "./Searchbar";

function Topbar() {
  const [topbar, setTopbar] = useState(false);
  const navRef = useRef();

	const showNavbar = () => {

		navRef.current.classList.toggle("responsive_nav");

  };
  const hideNavbar =()=>{

    navRef.current.classList.remove("responsive_nav")

  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setTopbar(true);
    } else {
      setTopbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [window.scrollY]);



  return (
    <header className={topbar ? 'header active' : 'header'}>
			<h3 className="logo"> <Link to='/'><FaBomb/>Netflix n Chill</Link></h3>
			<nav ref={navRef} onClick={hideNavbar}>

        <SearchBar/>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
    
    </header>
    
  );
}

export default Topbar;
