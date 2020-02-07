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
                    </li>
                    <li className="dt-side-nav__item dt-side-nav__header">
                        <span className="dt-side-nav__text">IR Pages</span>
                    </li>
                    <li className="dt-side-nav__item">
                        <a href="app-task-manager.html" className="dt-side-nav__link">
                            <i className="icon icon-task-manager icon-fw icon-lg"></i>
                            <span className="dt-side-nav__text">Demo1</span>
                        </a>
                    </li>
                    <li className="dt-side-nav__item">
                        <a href="app-task-manager.html" className="dt-side-nav__link">
                            <i className="icon icon-task-manager icon-fw icon-lg"></i>
                            <span className="dt-side-nav__text">Demo2</span>
                        </a>
                    </li>
                </ul>

            </div>
        </aside>
    )
}

export default Aside;