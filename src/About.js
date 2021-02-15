import React from 'react'
import Navigation from './Navigation'
import './style.css'

export default function About() {
    const title ={
        fontFamily: "Helvetica",
        fontSize:30,
        color:'#3f72af'
        

    }
    const page = {
        backgroundImage: 'linear-gradient(30deg, #f9f7f7 30%, #dbe2ef 90%)',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        minHeight: "100vh",
        minWidth: "100vh",
        textAlign: "center",
        fontFamily: "Helvetica Neue",
        color: "#3e4149",
        fontSize:19,
    }

    const textbox={
        padding:15,
        textAlign: "center"
    }
        

 
    
    return (
        <div style={page}>
            <Navigation/>
            <h3 style={title}>HELLO THERE!</h3>
            <div style={textbox}>
            <p>My name is Asma and im a second year Bachelor of Data Science student. I was born and brought up in Mumbai, India and am 
                currently studying in SP Jain School of Global Management in Sydney, Australia.</p>
                <break></break>
            <p>Being relatively new in my field, i am still learning new things everyday and trying my best to expand my skillset. You can 
                find more about my skills <a href="/Skills">here </a> and find out more about the coding languages i am familiar with <a href="/Language">here.</a></p>
                <break></break>
            <p>For further enquiries, you can get in touch with me through my <a href = "/Contact">contact details.</a></p>
        </div>
        </div>
    )
}
