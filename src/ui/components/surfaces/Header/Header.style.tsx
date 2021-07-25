import { experimentalStyled as styled } from '@material-ui/core';
import { AppBar } from '@material-ui/core';

export const HeaderAppBar = styled(AppBar)`
  background-color: ${(({theme}) => theme.palette.background.paper)};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);

  ${({ theme }) => theme.breakpoints.up('md')} {
    .MuiToolbar-root {
      height: 50px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled('img')`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 47px;
  }
`;

export const ToolbarStyled = styled('h3')`
  color: ${({ theme }) => theme.palette.secondary.dark};
`;
