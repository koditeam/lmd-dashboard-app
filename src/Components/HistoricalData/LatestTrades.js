import React from 'react';

function LatestTrades() {
    return(
        <div className="col-xl-12">

            <div className="card">

                <div className="card-header card-nav bg-transparent border-bottom">

                    <ul className="card-header-links nav nav-underline nav-scroll text-uppercase" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tab-pane1" role="tab"
                               aria-controls="tab-pane1" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-pane2" role="tab"
                               aria-controls="tab-pane2" aria-selected="false">opened</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-pane3" role="tab"
                               aria-controls="tab-pane3" aria-selected="false">awaiting reply</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-pane4" role="tab"
                               aria-controls="tab-pane4" aria-selected="false">closed</a>
                        </li>
                    </ul>

                </div>

                <div className="card-body px-0 pt-4">

                    <div className="tab-content">

                        <div id="tab-pane1" className="tab-pane active">

                            <div className="dt-widget dt-widget-sm dt-widget-hover">

                                <div className="dt-widget__item">

                                    <div className="dt-widget__img">
                                        <img className="dt-avatar size-30" src="https://via.placeholder.com/150x150"
                                             alt="User" />
                                    </div>

                                    <div className="dt-widget__info text-truncate">
                                        <a className="dt-widget__title text-truncate" href="javascript:void(0)">Can’t
                                            find the community
                                            signup...</a>
                                    </div>

                                    <div className="dt-widget__extra min-w-60 text-center align-self-center">
                                        <span className="badge badge-success badge-circle-animate">Critical</span>
                                    </div>

                                    <div className="dropdown align-self-center ml-1 ml-sm-10">
                                        <a className="dropdown-toggle no-arrow" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <i className="icon icon-vertical-more icon-fw text-light-gray"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0)">Action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Another
                                                action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Something
                                                else here</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="dt-widget-link">
                                    <a href="javascript:void(0)" className="text-uppercase font-weight-500">View all
                                        tickets</a>
                                </div>

                            </div>

                        </div>

                        <div id="tab-pane2" className="tab-pane">

                            <div className="dt-widget dt-widget-sm dt-widget-hover">

                                <div className="dt-widget__item">

                                    <div className="dt-widget__img">
                                        <img className="dt-avatar size-30" src="https://via.placeholder.com/150x150"
                                             alt="User" />
                                    </div>

                                    <div className="dt-widget__info text-truncate">
                                        <a className="dt-widget__title text-truncate" href="javascript:void(0)">Need
                                            some support to add a
                                            new...</a>
                                    </div>

                                    <div className="dt-widget__extra min-w-60 text-center align-self-center">
                                        <span className="badge badge-info badge-circle-animate">Critical</span>
                                    </div>

                                    <div className="dropdown align-self-center ml-1 ml-sm-10">
                                        <a className="dropdown-toggle no-arrow" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <i className="icon icon-vertical-more icon-fw text-light-gray"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0)">Action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Another
                                                action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Something
                                                else here</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="dt-widget__item">

                                    <div className="dt-widget__img">
                                        <img className="dt-avatar size-30" src="https://via.placeholder.com/150x150"
                                             alt="User" />
                                    </div>

                                    <div className="dt-widget__info text-truncate">
                                        <a className="dt-widget__title text-truncate" href="javascript:void(0)">Can’t
                                            find the community
                                            signup...</a>
                                    </div>

                                    <div className="dt-widget__extra min-w-60 text-center align-self-center">
                                        <span className="badge badge-success badge-circle-animate">Critical</span>
                                    </div>

                                    <div className="dropdown align-self-center ml-1 ml-sm-10">
                                        <a className="dropdown-toggle no-arrow" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <i className="icon icon-vertical-more icon-fw text-light-gray"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0)">Action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Another
                                                action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Something
                                                else here</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="dt-widget__item">

                                    <div className="dt-widget__img">
                                        <img className="dt-avatar size-30" src="https://via.placeholder.com/150x150"
                                             alt="User" />
                                    </div>

                                    <div className="dt-widget__info text-truncate">
                                        <a className="dt-widget__title text-truncate" href="javascript:void(0)">Pre-sale
                                            query about the
                                            product...</a>
                                    </div>

                                    <div className="dt-widget__extra min-w-60 text-center align-self-center">
                                        <span className="badge badge-danger badge-circle-animate">Critical</span>
                                    </div>

                                    <div className="dropdown align-self-center ml-1 ml-sm-10">
                                        <a className="dropdown-toggle no-arrow" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <i className="icon icon-vertical-more icon-fw text-light-gray"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0)">Action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Another
                                                action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Something
                                                else here</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="dt-widget__item">

                                    <div className="dt-widget__img">
                                        <img className="dt-avatar size-30" src="https://via.placeholder.com/150x150"
                                             alt="User" />
                                    </div>

                                    <div className="dt-widget__info text-truncate">
                                        <a className="dt-widget__title text-truncate" href="javascript:void(0)">Regarding
                                            customization
                                            service...</a>
                                    </div>

                                    <div className="dt-widget__extra min-w-60 text-center align-self-center">
                                        <span className="badge badge-dark badge-circle-animate">Critical</span>
                                    </div>

                                    <div className="dropdown align-self-center ml-1 ml-sm-10">
                                        <a className="dropdown-toggle no-arrow" href="#" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <i className="icon icon-vertical-more icon-fw text-light-gray"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0)">Action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Another
                                                action</a>
                                            <a className="dropdown-item" href="javascript:void(0)">Something
                                                else here</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="dt-widget-link">
                                    <a href="javascript:void(0)" className="text-uppercase font-weight-500">View all
                                        tickets</a>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default LatestTrades;