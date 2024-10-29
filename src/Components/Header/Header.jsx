import { Link} from "react-router-dom";

const Header = () => {
    
    return (
        <ul>
            <li>
            <Link to="/">Home</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/toprated">Toprated</Link>
            <Link to="/upcoming">Upcoming</Link>
            </li>
        </ul>
        );
    }
    export default Header