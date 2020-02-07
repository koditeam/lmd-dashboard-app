import React, {useState, useEffect} from 'react';
import axios from 'axios';


let current_datetime = new Date()
let formatted_date = current_datetime.getFullYear() + "-" + ('0' + current_datetime.getMonth() + 1).slice(-2) + "-" + ('0' + current_datetime.getDate()).slice(-2)
const SHAREHOLDERS = `https://api.livemarketdata.com/v1/market_data/v1/ICEAIR/shareholders?date=${formatted_date}`;

function ShareHolders() {
    let [shareholders, setShareholders] = useState([]);

    useEffect(()=>{
        axios
            .get(SHAREHOLDERS, {
                headers:{
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNtYXJpQGxpdmVtYXJrZXRkYXRhLmNvbSIsInN1YnNjcmlwdGlvbnMiOlsib214LWVxLTMiLCJLTW9iaWxlIiwib214LWZpLTMiLCJLUFJPUCIsIlF1ZXN0b3JCYXNpY1ZpZXciXSwiaXNzIjoidXJuOmxpdmVtYXJrZXRkYXRhLmNvbTp1c2VyX3N5c3RlbSIsInN5c3RlbSI6eyJzY29wZXMiOlsic3RhdGlzdGljcyIsIm1hcmtldF9mZWVkIiwicmlza19jaGVjayIsInN1YnNjcmlwdGlvbnMiLCJyZXN0X2FwaSIsInJlc3RfYm9uZHNfY2FsYyIsInJlc3Rfc3RhdGljX2RhdGEiLCJyZXN0X3JlYWx0aW1lX21hcmtldGRhdGEiLCJyZXN0X2NvbXBhbnlfcmVwb3J0cyJdLCJkZWxheWVkIjpmYWxzZSwiaWQiOiJrb2RpYWtfcHJvIiwidGltZW91dCI6ODY0MDAsIm5hbWUiOiJLT0RJQUsgUHJvIn0sImV4cCI6MTU4MTIwMDc4NywiaWF0IjoxNTgxMTE0Mzg3fQ.70hXYkNLn_ChAKQyvolgKjDnWiVXdUnwbwT6za-CTyU'
                }
            })
            .then(res => {
                setShareholders(res.data)
                console.log("THE DATA", res.data);
            })
            .catch(err => {
                console.error('Failed: ', err)
            });
    }, [])

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

                    {
                        shareholders && shareholders.map((shareholder, index)=>
                            <tr key={index}>
                                <td>{shareholder.Owner}</td>
                                <td>{shareholder.ClosingQuantity.toLocaleString('en')}</td>
                                <td>{(shareholder.Percentage * 100).toFixed(2)}%</td>
                            </tr>
                        )}


                    </tbody>
            </table>
        </div>
    )
}

export default ShareHolders;