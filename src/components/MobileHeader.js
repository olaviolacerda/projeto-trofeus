import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/MobileHeader.scss';

export default class MobileHeader extends Component {

    constructor() {
        super();
        this.state = {
            nav: 'hide',
            opened: false,
        }
    }

    renderNav = () => {
        let opened = false;
        let navBar = 'hide';
        if (this.state.opened === false) {
            navBar = '';
            opened = true;
        }
        this.setState({ nav: navBar, opened: opened })
    }


    render() {
        let btnOpenAppear = this.state.opened ? 'hide' : '';
        let btnCloseAppear = this.state.opened ? '' : 'hide';

        return (
            <header id="mobile-header" role="banner">
                <div className="col-12 mobile-header">
                    <div className="static-width">
                        <div className="row">
                            <div className="col-8">
                                <h1><i ></i><Link to="/" className="title">Pablo Gravações</Link></h1>
                            </div>
                            <div className={`nav-side col-12 ${this.state.nav}`}>
                                <div className={`side-menu-btn ${btnCloseAppear}`}>
                                    <button className="btn-close" onClick={this.renderNav}>X</button>
                                </div>

                                <nav >

                                    <ul>
                                        <li className="active"><Link className="col-12" to="/" >Home</Link></li>
                                        <li className="active"><Link className="col-12" to="/about"  >Sobre</Link></li>
                                        <li className="active"><Link className="col-12" to="/gallery" >Galeria</Link></li>
                                        <li className="active"><Link className="col-12" to="/services" >Serviços</Link></li>
                                        <li className="active"><Link className="col-12" to="/contact" >Contato</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-4 ">
                                <div className={`side-menu-btn ${btnOpenAppear}`}>
                                    <button className="btn-open" onClick={this.renderNav}>MENU</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header >
        );
    }
}

MobileHeader.contextTypes = {
    router: PropTypes.object.isRequired,
};