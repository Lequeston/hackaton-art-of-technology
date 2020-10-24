import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from "@redux/Location/LocationAction"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './Header.scss';

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
  const dispatch = useDispatch();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (filter: string) => {
    setAnchorEl(null);
    dispatch(setFilter(filter));
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
          <MenuItem onClick={() => handleClose("Одежда")}>Одежда</MenuItem>
          <MenuItem onClick={() => handleClose("Электроника")}>Электроника</MenuItem>
          <MenuItem onClick={() => handleClose("Продуктовый")}>Продуктовый</MenuItem>
          <MenuItem onClick={() => handleClose("Обувь")}>Обувь</MenuItem>
          <MenuItem onClick={() => handleClose("Гипермаркет")}>Гипермаркет</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          HACKATHON’20
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;