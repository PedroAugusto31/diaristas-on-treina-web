import React from 'react';
import { HeaderAppBar, HeaderLogo, ToolbarStyled } from './Header.style';
import { Toolbar, Container } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <ToolbarStyled>Diaristas-on</ToolbarStyled>
        <HeaderLogo src={'/img/logos/logo.svg'} alt="Diaristas-on" />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
