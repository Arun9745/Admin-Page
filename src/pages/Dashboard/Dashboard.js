import React from 'react';
import './Dashboard.css'; // Ensure you have this CSS file for styling
import tableData from './tableData.json';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);// Import necessary pieces from chart.js




const Dashboard = () => {
  // Your mock data for demonstration
  const surveysOpen = 4;
  const totalResponses = 2345;
  const partialResponses = 113;
  const surveysInDrafts = 12;
  const responseRate = ((totalResponses / (surveysOpen + surveysInDrafts)) * 100).toFixed(2);
  const avgTimeTaken = 9.05;

  // Pie chart data
 

  return (
    <div>
      <div className="survey-stats-container">
        <div className="stat">
          <div className="label">Surveys Open:</div>
          <div className="value">{surveysOpen}</div>
        </div>
        <div className="stat">
          <div className="label">Total Responses:</div>
          <div className="value">{totalResponses}</div>
        </div>
        <div className="stat">
          <div className="label">Partial Responses:</div>
          <div className="value">{partialResponses}</div>
        </div>
        <div className="stat">
          <div className="label">Surveys in Drafts:</div>
          <div className="value">{surveysInDrafts}</div>
        </div>
        <div className="stat">
          <div className="label">Response Rate:</div>
          <div className="value">{responseRate}%</div>
        </div>
        <div className="stat">
          <div className="label">Avg Time Taken (min):</div>
          <div className="value">{avgTimeTaken}</div>
        </div>
      </div>

      <div className="dash-table">
        <table className="survey-table">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>DATE CREATED</th>
              <th>QUESTIONS</th>
              <th>RESPONDENTS</th>
              <th>COMPLETION RATE</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.col1}</td>
                <td>{row.col2}</td>
                <td>{row.col3}</td>
                <td>{row.col4}</td>
                <td>{row.col5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart Section */}
     <div>
     
     </div>
    </div>
  );
};

export default Dashboard;
