import './Style.css'
import SearchIcon from '@material-ui/icons/Search'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <div>
      <nav className="header__nav">
        <Link className="nav__item" to="/" >
          <SearchIcon fontSize="large" />
        </Link>

        <Link className="nav__item" to="/Trend" >
          <WhatshotIcon fontSize="large" />
        </Link>
        
        <Link className="nav__item" to="/Save" >
          <BookmarkIcon fontSize="large" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;