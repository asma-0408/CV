import React from 'react'
import Navigation from './Navigation'
import './style.css'
import HomeButton from './HomeButton'

export default function Home() {
    const headerstyle={
        ackgroundImage: 'linear-gradient(30deg, #f9f7f7 30%, #dbe2ef 90%)',
        fontFamily: " Times, serif",
        textAlign: "center",
        fontSize:45,
        padding:10,
        color: "#112d4e",
    }
    const page = {
        backgroundImage: 'linear-gradient(75deg, #f9f7f7 50%, #dbe2ef 100%)',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        minHeight: "100vh",
        minWidth: "100vh",
        fontFamily: "Helvetica",
    }
    return (
        <div style={page}>
            <header style={headerstyle}>Asma Furniturewala</header>
            <Navigation/>
            <div>
                <HomeButton/>
            </div>
        </div>
    )
}
