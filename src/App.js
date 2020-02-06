import React from 'react';
import Aside from './Components/Aside';
import PriceData from './Components/PriceData';
import MarketData from './Components/MarketData';
import ShareData from './Components/ShareData';
import LatestTrades from './Components/HistoricalData/LatestTrades';

function App() {
    return (
        <React.Fragment>
            <div className="dt-layout--default dt-sidebar--fixed dt-header--fixed">
                {/*     <div className="dt-loader-container">
            <div className="dt-loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                        stroke-miterlimit="10"></circle>
              </svg>
            </div>
          </div>*/}

                <div className="dt-root">
                    <div className="dt-root__inner">
                        <header className="dt-header">

                            <div className="dt-header__container">

                                <div className="dt-brand">

                                    <div className="dt-brand__tool" data-toggle="main-sidebar">
                                        <div className="hamburger-inner"></div>
                                    </div>

                                    <span className="dt-brand__logo">
        <a className="dt-brand__logo-link" href="index.html">
          <img className="dt-brand__logo-img d-none d-sm-inline-block" src="https://via.placeholder.com/334x119"
               alt="Drift"/>
          <img className="dt-brand__logo-symbol d-sm-none" src="https://via.placeholder.com/133x119" alt="Drift"/>
        </a>
      </span>

                                </div>

                                <div className="dt-header__toolbar">

                                    <form className="search-box d-none d-lg-block">
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Search in app..." value=""
                                                   type="search"/>
                                            <span className="search-icon"><i
                                                className="icon icon-search icon-lg"></i></span>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary dropdown-toggle" type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">Category
                                                </button>

                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0)">Action</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Another
                                                        action</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Something
                                                        else here</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="dt-nav-wrapper">
                                        <ul className="dt-nav d-lg-none">
                                            <li className="dt-nav__item dt-notification-search dropdown">

                                                <a href="#" className="dt-nav__link dropdown-toggle no-arrow"
                                                   data-toggle="dropdown"
                                                   aria-haspopup="true" aria-expanded="false"> <i
                                                    className="icon icon-search icon-fw icon-lg"></i> </a>

                                                <div className="dropdown-menu">

                                                    <form className="search-box right-side-icon">
                                                        <input className="form-control form-control-lg" type="search"
                                                               placeholder="Search in app..."/>
                                                        <button type="submit" className="search-icon"><i
                                                            className="icon icon-search icon-lg"></i></button>
                                                    </form>

                                                </div>

                                            </li>
                                        </ul>


                                        <ul className="dt-nav">
                                            <li className="dt-nav__item dropdown">

                                                <a href="#"
                                                   className="dt-nav__link dropdown-toggle no-arrow dt-avatar-wrapper"
                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <img className="dt-avatar size-30"
                                                         src="https://via.placeholder.com/150x150"
                                                         alt="Domnic Harris"/>
                                                    <span className="dt-avatar-info d-none d-sm-block">
                <span className="dt-avatar-name">Bob Hyden</span>
              </span> </a>

                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <div
                                                        className="dt-avatar-wrapper flex-nowrap p-6 mt-n2 bg-gradient-purple text-white rounded-top">
                                                        <img className="dt-avatar"
                                                             src="https://via.placeholder.com/150x150"
                                                             alt="Domnic Harris"/>
                                                        <span className="dt-avatar-info">
                  <span className="dt-avatar-name">Bob Hyden</span>
                  <span className="f-12">Administrator</span>
                </span>
                                                    </div>
                                                    <a className="dropdown-item" href="javascript:void(0)"> <i
                                                        className="icon icon-user icon-fw mr-2 mr-sm-1"></i>Account
                                                    </a> <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="icon icon-settings icon-fw mr-2 mr-sm-1"></i>Setting
                                                </a>
                                                    <a className="dropdown-item" href="page-login.html"> <i
                                                        className="icon icon-editors icon-fw mr-2 mr-sm-1"></i>Logout
                                                    </a>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </header>
                        <main className="dt-main">
                            <Aside/>
                            <div className="dt-content-wrapper">
                                <div className="dt-content">
                                    <div className="dt-page__header">
                                        <h1 className="dt-page__title">Dashboard - Listing</h1>
                                    </div>
                                    <div className="row">
                                        <PriceData/>
                                    </div>
                                    <div className="row">
                                        <ShareData/>
                                        <MarketData/>
                                    </div>
                                    <div className="row">
                                        <LatestTrades/>
                                    </div>
                                    </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default App;
