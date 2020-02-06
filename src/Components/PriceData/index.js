import React from 'react';

function PriceData() {
    return(
        <div className="col-xl-12">
            <div className="card overflow-hidden">

                <div className="card-header bg-transparent">
                    <h3 className="card-title">Price Data</h3>
                </div>

                <div className="card-body pt-0">

                    <div className="table-responsive">
                        <table className="table table-bordered mb-0">
                            <thead>
                            <tr>
                                <th scope="col">Price</th>
                                <th scope="col">Bid</th>
                                <th scope="col">Ask</th>
                                <th scope="col">Volume</th>
                                <th scope="col"> No. of trades</th>
                                <th scope="col">Chg.</th>
                                <th scope="col">1 Month</th>
                                <th scope="col">Within year</th>
                                <th scope="col">1 Year</th>
                                <th scope="col">Last Trade</th>
                                <th scope="col">Year range</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>7.95</td>
                                <td>7.85</td>
                                <td>7.95</td>
                                <td>16.9M</td>
                                <td>6</td>
                                <td>2.62%</td>
                                <td>-0.75%</td>
                                <td>4.64/</td>
                                <td>-18.13</td>
                                <td>10.01.2020</td>
                                <td>''</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PriceData;