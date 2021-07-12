import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import { color } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign:"-webkit-center"
  },
  ulMenu:{
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    border: "1px solid #e7e7e7",
    backgroundColor: "#f3f3f3",
    width:"fit-content"
  },
  liMenu:{
    float: "left",
  },
  liAMenu:{
    display: "block",
    color: "#666",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
  },
  newButton:{
    backgroundColor:"orange",
    position:"static",
    color:"white",
    float:"right"
  },
  ptag:{
    color:"orange",
  }
}));

function Header({ modalOpen }) {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <p className={classes.ptag}>Making your Life Easy</p>
      <h1>Discovering the World</h1>

      <IconButton className={classes.newButton} onClick={modalOpen} size="large">
          <CreateIcon fontSize="inherit" />
        </IconButton>


      <ul className={classes.ulMenu}>
        <li className={classes.liMenu}>
          <a className={classes.liAMenu} href="#All">All</a>
        </li>
        <li className={classes.liMenu}>
          <a className={classes.liAMenu} href="#Travel">Travel</a>
        </li>
        <li className={classes.liMenu}>
          <a className={classes.liAMenu} href="#Lifestyle">Lifestyle</a>
        </li>
        <li className={classes.liMenu}>
          <a className={classes.liAMenu} href="#Business">Business</a>
        </li>
        <li className={classes.liMenu}>
          <a className={classes.liAMenu} href="#Food">Food</a>
        </li>
        <li className={classes.liMenu}>
          <a className={classes.liAMenu} href="#Work">Work</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
