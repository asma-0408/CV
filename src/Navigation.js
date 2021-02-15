import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      
    },
  },
}));
const styles = { 
    backgroundColor: '#112d4e',
    textAlign: "center"
    
}

export default function Navigation() {
  const history = useHistory();
  const goHome = () => history.push("/");
  const goAbout = () => history.push("/About");
  const goContact = () => history.push("/Contact");

  const classes = useStyles();

  return (
    <div className={classes.root} style={styles}>
      
      <Button onClick={goHome} color= "secondary" startIcon ={<HomeIcon/>}>HOME</Button>
      <Button onClick={goAbout} color= "secondary" startIcon ={<SentimentSatisfiedAltIcon/>}>ABOUT ME</Button>
      <Button onClick={goContact} color= "secondary" startIcon ={<ContactMailIcon/>}>CONTACT</Button>
      
    </div>
  );
}