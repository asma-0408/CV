import React from 'react';
import {Doughnut} from 'react-chartjs-2'
import './style.css'
import Navigation from './Navigation'
export default function Skills(){

    const page = {
        backgroundImage: 'linear-gradient(30deg, #f9f7f7 30%, #dbe2ef 90%)',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        minHeight: "100vh",
        minWidth: "100vh",
        textAlign: "center",
         
    }
    const text = {
        fontSize:25,
        fontFamily:"sans-serif",
        color: "#3e4149"
    }
   
        const data={
            labels:["Data Structures", "Web Design","Android Studio","Python", "SAS JMP"],
            datasets:
            [        
            {
                label: "Skills",
                data: [75, 50, 50, 40, 35],
                backgroundColor:
                [            
                    "#E27D60",
                    "#85DCB",            
                    "#E8A87C",            
                    "#C38D9E",            
                    "#41B3A3"         
                ],
                },
                ],    
            }; 
        const options = {      
            title: {        
            text: "Skills",
            },  
            responsive: true,
            maintainAspectRatio: false,    
            scales: {        
            yAxes: [          
            {            
            ticks: {              
            min: 0, 

        },          
    },    
],      
},    
};
    return (
            <div style={page}>
                <Navigation/>
                <h1 style={text}>SKILLS</h1>
                <Doughnut data={data}/> 
            </div>    );
              }
            





