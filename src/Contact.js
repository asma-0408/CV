import React from "react";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      
    },
  },
}));

const contacttext = {
  textAlign: "center",
  
  
  
};
const buttonstyle = {
  padding: 5,
  textAlign: "center",
  marginLeft: 5,
  marginRight: 5,
  marginTop: 0,
  marginBottom: 5,
};
const page = {
  backgroundImage: "linear-gradient(30deg, #f9f7f7 30%, #dbe2ef 90%)",
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  minHeight: "100vh",
  minWidth: "100vh",
  fontFamily: "Helvetica Neue",
  // color: "#3e4149",
  fontSize:19
};
const formstyle={
  textAlign: "center",
  padding: 10,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 0,
  marginBottom: 5,
}


export default function Contact() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const show = () => {
    setName("");
    setEmail("");
    alert("I'll get back to you shortly");
  };

  return (
    <div style={page}>
      <Navigation />
      <div style={contacttext}>
        <h3>Email - asmafurniturewala368@gmail.com</h3>
        <h3>Mobile Number - 7775559991</h3> 
      </div>
      <div className={classes.root} style={buttonstyle}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/asma-furniturewala-61775a1a9"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
        
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/asma-0408"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </div>
      <div style={formstyle}>
        <h2>Please enter your contact details</h2>
        <form>
          <label>Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
          
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <button type="submit" onClick={show}>
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
