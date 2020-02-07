import React, {useState} from 'react';
import axios from 'axios';



let current_datetime = new Date()
let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
const SHAREHOLDERS = `https://api.livemarketdata.com/v1/market_data/v1/ICEAIR/shareholders?date=${formatted_date}`;

function ShareHolders() {
    let [shareholders, setShareholders] = useState([]);
    axios
        .get(SHAREHOLDERS)
        .then(res => {
            setShareholders(res.data)
        })
        .catch(err => {
            console.error('Failed: ', err)
        });
    console.log("THE DATA", shareholders);
    return(
        <div className="table-responsive">
            <table className="table mb-0">
                    <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Number of shares</th>
                        <th>%</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Samherji Holding ehf.</td>
                        <td>50.600.000</td>
                        <td>27,1%</td>
                    </tr>
                    <tr>
                        <td>Global Macro Portfolio</td>
                        <td>4.064.445</td>
                        <td>2,2%</td>
                    </tr>
                    <tr>
                        <td>Almenni lífeyrissjóðurinn</td>
                        <td>3.611.558</td>
                        <td>1,9%</td>
                    </tr>
                    <tr>
                        <td>Landsbankinn hf.</td>
                        <td>1.195.685</td>
                        <td>0,6%</td>
                    </tr>
                    <tr>
                        <td>Kvika banki hf.</td>
                        <td>2.055.339</td>
                        <td>1,1%</td>
                    </tr>
                    <tr>
                        <td>Sjóvá-Almennar tryggingar hf.</td>
                        <td>1.369.265</td>
                        <td>0,7%</td>
                    </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default ShareHolders;