import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "@redux/Location/LocationAction"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import './Header.scss';
import { AppStateType } from '@/types/global';
import Select from '@material-ui/core/Select';
import { BorderBottom } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      paddingRight: 0,
    },
    title: {
      flexGrow: 1,
    },
    text: {
      color: '#fff !important',
      borderBottom: '1px solid #fff',
    }
  }),
);

const categories: Array<{name: string, value: string}> = [
  {
    value: 'Одежда',
    name: 'Одежда'
  },
  {
    value: 'Электроника',
    name: 'Электроника'
  },
  {
    value: 'Одежда',
    name: 'Одежда'
  },
  {
    value: 'Продуктовый',
    name: 'Продуктовый'
  },
  {
    value: 'Обувь',
    name: 'Обувь'
  },
  {
    value: 'Гипермаркет',
    name: 'Гипермаркет'
  }
]
const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const filter = useSelector((state: AppStateType) => state.location.filter);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setFilter(event.target.value as string));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          HACKATHON’20
        </Typography>
        <Select
          displayEmpty
          className={classes.text}
          inputProps={{ 'aria-label': 'Without label' }}
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Выбирете категорию</em>
          </MenuItem>
          {categories.map(categ => {
            return (
              <MenuItem value={categ.value} key={categ.value}>{categ.name}</MenuItem>
            );
          })}
        </Select>
      </Toolbar>
    </AppBar>
  )
};

export default Header;