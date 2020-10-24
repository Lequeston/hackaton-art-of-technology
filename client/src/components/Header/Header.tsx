import React from 'react';
import './Header.scss';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          edge="start" 
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Одежда</MenuItem>
          <MenuItem onClick={handleClose}>Электроника</MenuItem>
          <MenuItem onClick={handleClose}>Продуктовый</MenuItem>
          <MenuItem onClick={handleClose}>Обувь</MenuItem>
          <MenuItem onClick={handleClose}>Гипермаркет</MenuItem>
          <MenuItem onClick={handleClose}>Для дома</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          HACKATHON’20
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;