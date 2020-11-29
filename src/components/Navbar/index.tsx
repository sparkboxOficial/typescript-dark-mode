import React from 'react';
import { NavbarContainer, NavbarWrapper, NavbarLogo, NavbarToggle, NavToggleWrapper} from './NavbarElements';
import LogoBlack from '../../assets/Logo_black.svg';
import LogoWhite from '../../assets/Logo_white.svg';
import { FaSun, FaRegMoon } from 'react-icons/fa'

interface INavbar {
  toggle: () => void;
  dark: boolean;
}

const Navbar:React.FC<INavbar> = ({ toggle, dark }) => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarLogo src={dark ? LogoWhite : LogoBlack}/>
          <NavToggleWrapper>
            <NavbarToggle 
              icons={{
                checked: <FaSun />,
                unchecked: <FaRegMoon />
              }}
              onChange={toggle}
              className="custom-color"
            />
          </NavToggleWrapper>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar;