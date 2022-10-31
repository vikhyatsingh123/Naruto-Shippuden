import { Outlet, Link } from "react-router-dom";


const Nav=()=>{
    return(
        <>
          <nav>
            <ul className="navbar">
                <li className="logo"> <b className="anuj">AnujBlog</b></li>
                
                <li className="right">
                    <Link to="/about" style={{ textDecoration: 'none' }}><b className="b">ABOUT</b></Link>
                </li>
                <li className="right">
                    <Link to="/creatblog" style={{ textDecoration: 'none' }}><b className="b">CREATE BLOG</b></Link>
                </li>
                <li className="right">
                    <Link to="/" style={{ textDecoration: 'none' }}> <b className="b">HOME</b> </Link>
                </li>
               
               
            </ul>
          </nav>
          <Outlet />
        </>
    )
}

export default Nav;
