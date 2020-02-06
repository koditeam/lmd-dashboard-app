import React from 'react';

function ShareData() {
    return (
        <div className="col-xl-6">
            <div className="dt-card overflow-hidden">
                <div className="card-header bg-transparent">
                    <h3 className="card-title">Share Data</h3>
                </div>
                <div className="card-body pt-0">
                    <div className="table-responsive">
                        <table className="table mb-0">
                            <tbody>
                            <tr>
                                <th>Currency</th>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <th>Previous Close</th>
                                <td>7.9</td>
                            </tr>
                            <tr>
                                <th>1Y high</th>
                                <td>7.90</td>
                            </tr>
                            <tr>
                                <th>1Y high date</th>
                                <td>2020-01-10</td>
                            </tr>
                            <tr>
                                <th>1Y low</th>
                                <td>7.38</td>
                            </tr>
                            <tr>
                                <th>1Y low date</th>
                                <td>2020-01-06</td>
                            </tr>
                            <tr>
                                <th>1Y change</th>
                                <td>-18.13%</td>
                            </tr>
                            <tr>
                                <th>YTD change</th>
                                <td>4.64%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default ShareData;