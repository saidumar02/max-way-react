import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <img src="/images/Group Copy 2.png" alt=""/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse jk" id="navbarTogglerDemo01">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link n1" href="#">Menyu<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link n2" href="#">Bolalar uchun</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link n3" href="#">Filiallar</a>
                                </li>
                                <div className="g1">
                                    <img className={'g2'} src="/images/Group.svg" alt=""/>
                                    <p className={'g3'}>(+99871)</p>
                                    <h5 className={'g4'}>200-54-00</h5>
                                </div>
                                <div className="lne"></div>
                                <div className="g22">
                                    <img className={'g21'} src="/images/Group (1).svg" alt=""/>
                                    <h5 className={'g31'}>Korzina</h5>
                                    <p className={'g41'}>125,400 UZS</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;