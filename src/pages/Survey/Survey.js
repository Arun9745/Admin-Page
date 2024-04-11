import React from 'react';
import './Survey.css';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';

const Survey = () => {
  return (
    <div> <section class="table__body">
    <table class='tr-survey'>
        <thead>
            <tr>
                {/* <th> Id <span class="icon-arrow">&UpArrow;</span></th> */}
                <th>TITLE </th>
                <th>STATUS</th>
                <th> DATE CREATED</th>
                <th> QUESTIONS </th>
                <th> RESPONDENTS </th>
            </tr>
        </thead>
        <tbody class='table-size'>
        <div class="table-space"></div>
            <tr class="tr-spacing"> 
                
                <td> Customer reward Feedback</td>
                <td>  <NavLink to="/Surveysheets" class="statuscancelled">Not Started</NavLink> </td>
                <td> 17 Dec, 2022 </td>
                <td>
                   15
                </td>
                <td> -</td>
            </tr>
            <div class="table-space"></div>
            <tr class="tr-spacing">
                {/* <td> 2 </td> */}
                
                <td>Customer Reward Feedback </td>
                <td> <NavLink to="/Surveysheets" class="statuspending">In Progress</NavLink></td>
                <td> 27 Aug, 2023 </td>
                <td>
                   20
                </td>
                <td>58 </td>
            </tr>
            <div class="table-space"></div>
            <tr class="tr-spacing">
                {/* <td> 3</td> */}
                
                <td> Spring Seasoned Sales Survey </td>
                <td> <NavLink to="/Surveysheets" class="statusdelivered">Completed</NavLink></td>
                <td> 14 Mar, 2023 </td>
                <td>
                   25
                </td>
                <td> 3412 </td>
            </tr>
            <div class="table-space"></div>
            <tr class="tr-spacing">
                {/* <td> 4</td> */}
                
                <td> New Year Survey </td>
                <td><NavLink to="/Surveysheets" class="statusshipped">Incomplete</NavLink></td>
                <td> 25 May, 2023 </td>
                <td>
                    10
                </td>
                <td> 6459</td>
            </tr>
            <div class="table-space"></div>
            <tr class="tr-spacing">
                {/* <td> 5</td> */}
            
                <td>Sarita Limbu </td>
                <td><NavLink to="/Surveysheets" class="statusdelivered"> Incomplete </NavLink></td>
                <td> 23 Apr, 2023 </td>
                <td>
                   56
                </td>
                <td> 9875 </td>
            </tr>
            
        </tbody>
    </table>
</section>
</div>
  )
}

export default Survey