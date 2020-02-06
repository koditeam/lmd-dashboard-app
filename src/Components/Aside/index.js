import React from 'react';

function Aside() {
    return(
        <aside id="main-sidebar" className="dt-sidebar">
            <div className="dt-sidebar__container">

                <ul className="dt-side-nav">

                    <li className="dt-side-nav__item dt-side-nav__header">
                        <span className="dt-side-nav__text">main</span>
                    </li>

                    <li className="dt-side-nav__item">
                        <a href="javascript:void(0)" className="dt-side-nav__link dt-side-nav__arrow">
                            <i className="icon icon-dashboard icon-fw icon-lg"></i>
                            <span className="dt-side-nav__text">dashboard</span>
                        </a>

                        <ul className="dt-side-nav__sub-menu">
                            <li className="dt-side-nav__item">
                                <a href="index.html" className="dt-side-nav__link">
                                    <i className="icon icon-listing-dbrd icon-fw icon-lg"></i>
                                    <span className="dt-side-nav__text">Listing</span>
                                </a>
                            </li>

                            <li className="dt-side-nav__item">
                                <a href="dashboard-real-estate.html" className="dt-side-nav__link">
                                    <i className="icon icon-company icon-fw icon-lg"></i>
                                    <span className="dt-side-nav__text">Real Estate</span>
                                </a>
                            </li>

                            <li className="dt-side-nav__item">
                                <a href="dashboard-crypto.html" className="dt-side-nav__link">
                                    <i className="icon icon-crypto icon-fw icon-lg"></i>
                                    <span className="dt-side-nav__text">Crypto</span>
                                </a>
                            </li>

                            <li className="dt-side-nav__item">
                                <a href="dashboard-crm.html" className="dt-side-nav__link">
                                    <i className="icon icon-crm icon-fw icon-lg"></i>
                                    <span className="dt-side-nav__text">Crm</span>
                                </a>
                            </li>
                        </ul>
                    </li>


                </ul>

            </div>
        </aside>
    )
}

export default Aside;