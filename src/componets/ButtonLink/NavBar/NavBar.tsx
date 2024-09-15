import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss'

const NavBar = () => {
    return <div className="nav-bar">
       <a href="/">
       <ImageFrame
           src="https://static.vecteezy.com/system/resources/previews/020/500/779/non_2x/ford-brand-logo-car-symbol-white-design-usa-automobile-illustration-with-black-background-free-vector.jpg"
           alt="Ford"
           width="93" 
        />
      </a>
        <Menu />
        <NavUtils />
    </div>
}

export { NavBar };
