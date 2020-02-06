import React from 'react';

function MarketData() {
    return (
        <div className="col-xl-6">
            <div className="dt-card overflow-hidden">
                <div className="card-header bg-transparent">
                    <h3 className="card-title">Market Data</h3>
                </div>
                <div className="card-body pt-0">
                    <div className="table-responsive">
                        <table className="table mb-0">
                            <tbody>
                            <tr>
                                <th>Market</th>
                                <td>ISEQ SHR</td>
                            </tr>
                            <tr>
                                <th>Symbol</th>
                                <td>ICE AIR</td>
                            </tr>
                            <tr>
                                <th>ISIN</th>
                                <td>IS0000013464</td>
                            </tr>
                            <tr>
                                <th>Industry</th>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <th>Issued Shares</th>
                                <td>5,437,660,653</td>
                            </tr>
                            <tr>
                                <th>Own shares</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>No. of outstanding shares</th>
                                <td>-5,437,660,653</td>
                            </tr>
                            <tr>
                                <th>Market cap in ISK</th>
                                <td>42.6B</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default MarketData;