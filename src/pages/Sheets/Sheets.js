import React from 'react';
import './Sheets.css';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



const Sheets = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Sales',  
          data: [65, 59, 80, 81, 56],
         
          backgroundColor: 'rgba(228, 137, 82, 0.9)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Chart options
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    // Destroy previous chart if it exists
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    // Create new chart
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup function to destroy the chart on unmount
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
        <div className="main">
          <h1>Hello</h1>
        </div>
        <div className="second-bar">
        <tr>
                {/* <th> Id <span class="icon-arrow">&UpArrow;</span></th> */}
                <th>Total Response: </th>
                <td> 15</td>
                <th><button class='view'>View all respondents</button></th>
                <th><button class='download'>Download Report</button></th>
                <th><button class='vshe'>View Sheets</button></th>
            </tr>
        </div>
        <div className="cards">
          <div className="first-card">
          <div className="graph">
        <p class='first-question'>1.  How satisfied are you with the overall shopping experience during the New Year sales season? <h5 class='response'>125 Response</h5></p>
        <div style={{ width: '400px',height:'600px', margin: '0px auto ',padding: '100px '}}>
        <canvas ref={canvasRef} />
      </div>
      
      {/* <div className="second-card">
          <div className="graph">
        <p class='first-question'>1.  How satisfied are you with the overall shopping experience during the New Year sales season? <h5 class='response'>125 Response</h5></p>
        <div style={{ width: '500px',height:'500px', margin: '100px auto ',padding: '100px auto'}}>
        <canvas ref={canvasRef} />
      </div> */}

        
      </div>
      
       
        
      
    </div>
          </div>
        </div>
  
  );
};


export default Sheets;