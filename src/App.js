import React from 'react';
import $ from 'jquery';
import PriceData from './Components/PriceData';
import MarketData from './Components/MarketData';
import ShareData from './Components/ShareData';
import LatestTrades from './Components/HistoricalData/LatestTrades';
import Aside from './Components/Aside';


function App() {
    return (
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
          <img className="dt-brand__logo-img d-none d-sm-inline-block"
               src="http://drift-admin.g-axon.work/assets/images/logo-white.png"
               alt="Drift"/>
          <img className="dt-brand__logo-symbol d-sm-none"
               src="http://drift-admin.g-axon.work/assets/images/logo-symbol.png" alt="Drift"/>
        </a>
      </span>
                        </div>

                        <div className="dt-header__toolbar">

                            <form className="search-box d-none d-lg-block">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Search symbol" value=""
                                           type="search"/>
                                    <span className="search-icon"><i
                                        className="icon icon-search icon-lg"></i></span>
                             {/*       <div className="input-group-append">
                                        <button className="btn btn-primary dropdown-toggle" type="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">Category
                                        </button>


                                    </div>*/}
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
                                                 src="http://drift-admin.g-axon.work/assets/images/user-avatar/domnic-harris.jpg"
                                                 alt="Domnic Harris"/>
                                            <span className="dt-avatar-info d-none d-sm-block">
                <span className="dt-avatar-name">Sean</span>
              </span> </a>
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
                                <h1 className="dt-page__title">Investor Relations Dashboard</h1>
                            </div>
                            <div className="row">
                                <LatestTrades/>
                            </div>

                        </div>
                    </div>
                </main>

            </div>
        </div>

    );
}

export default App;
