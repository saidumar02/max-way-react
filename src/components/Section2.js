import React, {Component} from 'react';

class Section2 extends Component {
    render() {
        return (
            <section className="section-4">
                <div className="container">
                    <hr/>
                    <div className="row">
                        <ul className="nav nav-tabs border-0 pt-lg-5 pt-5 nav-fil-div">
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0 active" data-toggle="tab"
                                   href="#home">Barchasi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0" data-toggle="tab" href="#menu1">Pitsa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0" data-toggle="tab" href="#menu2">Burger</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0" data-toggle="tab" href="#menu3">Kombo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0" data-toggle="tab" href="#menu9">Salat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0 px-lg-2 px-2" data-toggle="tab"
                                   href="#menu9">Shirinliklar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt-1 border-0 px-lg-2 px-2" data-toggle="tab"
                                   href="#menu5">Ichimliklar</a>
                            </li>
                            <button className="btn-77">
                                <img src="/img/seet.png" className="mr-lg-2 mr-2" alt=""/>Filter
                            </button>
                        </ul>
                        <div className="tab-content">
                            <div id="home" className="container tab-pane active section-4-tap-id"><br/>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-4">Ptisa</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap.png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Gavaya</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.</p>
                                                <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(1).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Mexica</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.</p>
                                                <h3 className="section-4-pas-sum font-weight-bold">53,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(2).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Hot achchika</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">64,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button"
                                            className="btn btn-primary section-4-splise-btn btn-block btn-outline-light border-0 mx-lg-o mx-3 mt-lg-0 mt-4"
                                            data-toggle="collapse" data-target="#demo">Ko'proq qo'shish
                                    </button>
                                    <div id="demo" className="collapse">
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(3).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Mexica</h3>
                                                        <img src="/img/4.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(2).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Apocalipo</h3>
                                                        <img src="/img/2.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">64,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(3).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Sosiskacho</h3>
                                                        <img src="/img/3.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(1).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Mexica</h3>
                                                        <img src="/img/4.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">53,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(3).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Mexica</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(2).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Apocalipo</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">64,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(3).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Sosiskacho</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(1).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Mexica</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">53,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-5">Burger</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Cheeseburger</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Chili burger</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Hamburger</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button"
                                            className="btn btn-primary section-4-splise-btn btn-block btn-outline-light border-0 mx-lg-o mx-3 mt-lg-0 mt-4 mb-lg-0 mb-4"
                                            data-toggle="collapse" data-target="#demo-2">Ko'proq qo'shish
                                    </button>
                                    <div id="demo-2" className="collapse">
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-0 mb-4">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(4).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Double Burger</h3>
                                                        <img src="/img/4.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Double Burger</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-5">Kombo</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/max%20kvadrat%20menu%20-%20печать%202@2x%20copy.png"
                                                     alt="" className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Kombo-1</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">25,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(8).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Kombo-2</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/max%20kvadrat%20menu%20-%20печать%202@2x%20copy.png"
                                                     alt="" className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Kombo-3</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">30,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-5">Ichimliklar</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(9).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Sprite 1L</h3>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">6,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(10).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Coca cola 1,5L</h3>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">9,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(11).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Fanta 1L</h3>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">6,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu1" className="container tab-pane fade section-4-tap-id"><br/>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-4">Ptisa</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap.png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Gavaya</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(1).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Mexica</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">53,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(2).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Hot achchika</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">64,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button"
                                            className="btn btn-primary section-4-splise-btn btn-block btn-outline-light border-0 mx-lg-o mx-3 mt-lg-0 mt-4 mb-lg-0 mb-4"
                                            data-toggle="collapse" data-target="#demo">Ko'proq qo'shish
                                    </button>
                                    <div id="demo" className="collapse">
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(3).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Mexica</h3>
                                                        <img src="/img/4.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(2).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Apocalipo</h3>
                                                        <img src="/img/2.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">64,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(3).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Sosiskacho</h3>
                                                        <img src="/img/3.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(1).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Mexica</h3>
                                                        <img src="/img/4.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">53,000 UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(3).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Mexica</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(2).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Apocalipo</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">64,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(3).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Sosiskacho</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">45,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(1).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Mexica</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">53,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" className="container tab-pane fade section-4-tap-id"><br/>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-5">Burger</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Cheeseburger</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Chili burger</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Hamburger</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button"
                                            className="btn btn-primary section-4-splise-btn btn-block btn-outline-light border-0 mx-lg-o mx-3 mt-lg-0 mt-4 mb-lg-0 mb-4"
                                            data-toggle="collapse" data-target="#demo-2">Ko'proq qo'shish
                                    </button>
                                    <div id="demo-2" className="collapse">
                                        <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-0 mb-4">
                                            <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                                <div className="section-4-img-div ml-lg-4">
                                                    <img src="/img/Bitmap%20(4).png" alt=""
                                                         className="section-4-img ml-lg-3 ml-2"/>
                                                </div>
                                                <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                    <div
                                                        className="section-4-text-div d-flex justify-content-center align-items-center">
                                                        <h3 className="section-4-img-title">Double Burger</h3>
                                                        <img src="/img/4.svg" alt=""
                                                             className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                    </div>
                                                    <p className="section-4-img-text text-secondary">
                                                        Lorem ipsum dolor sit <br/>
                                                        amet, consectetur adipisicing <br/>
                                                        elit. Dolores, fuga.
                                                    </p>
                                                    <h3 className="section-4-pas-sum font-weight-bold">23,000
                                                        UZS</h3>
                                                    <div className="section-4-pas-btn-div">
                                                        <h5 className="section-4-pas-btn-icon">+</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div section-4-splise mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(4).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Double Burger</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000 UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" className="container tab-pane fade section-4-tap-id"><br/>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-5">Kombo</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img
                                                    src="/img/max%20kvadrat%20menu%20-%20печать%202@2x%20copy.png"
                                                    alt="" className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Kombo-1</h3>
                                                    <img src="/img/4.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">25,000
                                                    UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(8).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Kombo-2</h3>
                                                    <img src="/img/2.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">23,000
                                                    UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0 mb-lg-4 mb-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img
                                                    src="/img/max%20kvadrat%20menu%20-%20печать%202@2x%20copy.png"
                                                    alt="" className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Kombo-3</h3>
                                                    <img src="/img/3.svg" alt=""
                                                         className="section-4-img-2 ml-lg-3 mt-lg-0 mt-3 ml-3"/>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">30,000
                                                    UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu5" className="container tab-pane fade section-4-tap-id"><br/>
                                <h1 className="section-4-title font-weight-bold col-lg-12 mt-lg-5 mt-5">Ichimliklar</h1>
                                <div className="section-4-card-kotta-div d-flex flex-wrap">
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(9).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div
                                                className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Sprite 1L</h3>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">6,000
                                                    UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(10).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div
                                                className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Coca cola 1,5L</h3>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">9,000
                                                    UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-4-card-div mt-lg-4 mt-4 ml-lg-3 ml-0 mr-lg-0 mr-0  mb-lg-4 mb-4">
                                        <div className="section-4-card-div-kich mt-lg-4 d-flex">
                                            <div className="section-4-img-div ml-lg-4">
                                                <img src="/img/Bitmap%20(11).png" alt=""
                                                     className="section-4-img ml-lg-3 ml-2"/>
                                            </div>
                                            <div
                                                className="section-4-img-2-div d-flex flex-wrap ml-lg-4 ml-3">
                                                <div
                                                    className="section-4-text-div d-flex justify-content-center align-items-center">
                                                    <h3 className="section-4-img-title">Fanta 1L</h3>
                                                </div>
                                                <p className="section-4-img-text text-secondary">
                                                    Lorem ipsum dolor sit <br/>
                                                    amet, consectetur adipisicing <br/>
                                                    elit. Dolores, fuga.
                                                </p>
                                                <h3 className="section-4-pas-sum font-weight-bold">6,000
                                                    UZS</h3>
                                                <div className="section-4-pas-btn-div">
                                                    <h5 className="section-4-pas-btn-icon">+</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section2;