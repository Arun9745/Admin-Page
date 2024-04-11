import React from 'react';
import './Report.css';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';

const Report = () => {
    return (
        <div>
            <section class="table__body">
                <table class='tr-align'>
                    <thead>
                        <tr>
                            {/* <th> Id <span class="icon-arrow">&UpArrow;</span></th> */}
                            <th>TITLE </th>
                            <th> DATE CREATED</th>
                            <th> QUESTIONS </th>
                            <th> RESPONDENTS </th>
                            <th> REPORTS </th>
                        </tr>
                    </thead>
                    <tbody>
                        <div class="table-space"></div>
                        <tr class="tr-align">

                            <td> Customer reward Feedback</td>

                            <td> 17 Dec, 2022 </td>
                            <td>
                                15
                            </td>
                            <td> -</td>
                            <td><NavLink to="/Sheets"><button class='sheets'> View Sheets</button></NavLink></td>
                        </tr>
                        <div class="table-space"></div>
                        <tr class="tr-spacing">
                            {/* <td> 2 </td> */}

                            <td>Customer Reward Feedback </td>

                            <td> 27 Aug, 2023 </td>
                            <td>
                                20
                            </td>
                            <td>58 </td>
                            <td><button class='sheets'> View Sheets</button></td>
                        </tr>
                        <div class="table-space"></div>
                        <tr class="tr-spacing">
                            {/* <td> 3</td> */}

                            <td> Spring Seasoned Sales Survey </td>

                            <td> 14 Mar, 2023 </td>
                            <td>
                                25
                            </td>
                            <td> 3412 </td>
                            <td><button class='sheets'> View Sheets</button></td>
                        </tr>
                        <div class="table-space"></div>
                        <tr class="tr-spacing">
                            {/* <td> 4</td> */}

                            <td> New Year Survey </td>

                            <td> 25 May, 2023 </td>
                            <td>
                                10
                            </td>
                            <td> 6459</td>
                            <td><button class='sheets'> View Sheets</button></td>
                        </tr>
                        <div class="table-space"></div>
                        <tr class="tr-spacing">
                            {/* <td> 5</td> */}

                            <td> Sarita Limbu </td>

                            <td> 23 Apr, 2023 </td>
                            <td>
                                56
                            </td>
                            <td> 9875 </td>
                            <td><button class='sheets'> View Sheets</button></td>
                        </tr>

                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Report