import React from 'react';
import './style.css';
import {Bar} from 'react-chartjs-2';
import Navigation from './Navigation'

export default function Language() {
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
    const state = {
        labels: ['Python', 'Kotlin', 'JavaScript', 
                 'HTML', 'SQL'],
        datasets: [
          {
            label: 'Languages',
            backgroundColor: ['#f38181','#fce38a','#eaffd0','#95e1d3', '#e7d9ea'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [3,3.5,2.5,3,3.5],
           
          }
        ]
      }
    return (
        <div style={page}>
            <Navigation/>
        
        <div>
        <Bar
          data={state}
          width={71}
            height={32}
          options={{
            title:{
              display:true,
              text:'Languages',
              fontSize:20,
              
              
              
            },
            // maintainAspectRatio: {false},
            legend:{
              display:true,
              position:'right'

            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  gridLines: { display: false }   
                  
                }
              }],
              xAxes: [{
                barThickness : 73,
                gridLines: { display: false }
                
            }],
            }
          }}
        />
      </div>
      </div>
    )
}
