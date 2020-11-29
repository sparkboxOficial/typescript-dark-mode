import styled from 'styled-components';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

export const NavbarContainer = styled.nav`
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: center;
`

export const NavbarWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 15px 24px;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarLogo = styled.img`
  height: 45px;
`

export const NavToggleWrapper = styled.div`
  .react-toggle--checked .react-toggle-track {
    background-color: #F9812A;
  }
  .react-toggle--checked .react-toggle-thumb {
    border: 1px solid #F9812A;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #F9812A;
  }

  .react-toggle--checked svg {
    margin-right: 2px;
  }

  .react-toggle-track-x svg {
    margin-left: -2px;
  }
`

export const NavbarToggle = styled(Toggle)`
  svg {
    margin-top: -2px;
    color: white;
  }
`