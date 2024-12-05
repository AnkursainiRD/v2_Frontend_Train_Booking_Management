import "../styles/NavBar.css"
import {links,authLink} from "../data/navLinks.js"
import DefaultButton from "./DefaultButton.jsx"
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-iteam">
          <ul>
          {
            links&& links.map((link)=>{
              return <li key={link}>{link}</li>
            })
          }
          </ul>
        </div>
        <div className="nav-auth">
          <ul>
            {
              authLink&& authLink.map((link)=>{
                return <>
                  {
                    link=="Login"? <li> <DefaultButton text={link}/></li> : <li>{link}</li>
                  }
                </>
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default NavBar