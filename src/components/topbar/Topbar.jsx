import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* <a href="#intro" className="homeIcon"><HomeIcon/></a> */}
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>(801)600-9093</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>andradef801@gmail.com</span>
          </div>
        </div>        
        <div className="right">
          <h4>Menu</h4>
          <div className="hamburger" onClick={ ()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  )
}
