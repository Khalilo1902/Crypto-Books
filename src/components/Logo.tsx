import {Link} from "react-router-dom";
import logo from "../../src/assets/logo.svg"

const Logo = () => {
    return (
        <Link to="/"
              className="absolute top-[1.5rem] left-[1.5rem]
              [text-decoration:none] text-lg text-cyan flex items-center
              "
        >
            <img src={logo} alt="cryptoBooks"/>
            <span>CryptoBooks</span>
        </Link>
    );
}

export default Logo;