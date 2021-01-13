import React, {useEffect, useState} from "react";
import { AppBar, Collapse, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  
    appbar: {
    background: "none",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTittle: {
    flexGrow: "1",
  },
  Wrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#5AFF3D",
  },
  title: {
    color: '#fff',
    fontSize: '4rem',
  },
  containner: {
    textAlign: 'center',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  },[])
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.Wrapper}>
          <h1 className={classes.appbarTittle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>


      <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapsedHeight={50}>
      <div className={classes.containner}>
        <h1 className={classes.title}>
          Welcome to
          <br />
          My<span className={classes.colorText}>Island</span>
          <br/>
          <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
          </IconButton>
        </h1>
      </div>
      </Collapse>
    </div>
  );
}
