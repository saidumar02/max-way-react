import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <img className="ft-img" src="/images/Group%20Copy%202.png" alt=""/>
                            <div className="dc-1 asosiy-splise">
                                <h1 className="tx-1">Asosiy</h1>
                                <p className="tx-2">Kompaniya haqida </p>
                                <p className="tx-2"> Filiallar </p>
                                <p className="tx-2">Bolalar uchun</p>
                            </div>
                            <button type="button" className="btn btn-primary footer-splise-btn mt-5 ml-3"
                                    data-toggle="collapse" data-target="#demo-4">Asosiy
                            </button>
                            <div id="demo-4" className="collapse kk">
                                <div className="dc-1 iut text-center">
                                    <h1 className="tx-1">Asosiy</h1>
                                    <p className="tx-2 mt-lg-0 mt-4">Kompaniya haqida </p>
                                    <p className="tx-2"> Filiallar </p>
                                    <p className="tx-2">Bolalar uchun</p>
                                </div>
                            </div>
                            <div className="dc-1 asosiy-splise">
                                <h1 className="tx-1">Qo’shimcha</h1>
                                <p className="tx-2">Menyu </p>
                                <p className="tx-2">Bonusli karta</p>
                                <p className="tx-2">Bu qanday ishlaydi?</p>
                            </div>
                            <button type="button" className="btn btn-primary footer-splise-btn mt-3 ml-3"
                                    data-toggle="collapse" data-target="#demo-3">Qo'shimcha
                            </button>
                            <div id="demo-3" className="collapse kk">
                                <div className="dc-1 iut text-center">
                                    <h1 className="tx-1">Qo’shimcha</h1>
                                    <p className="tx-2 mt-lg-0 mt-4">Menyu</p>
                                    <p className="tx-2">Bonusli karta</p>
                                    <p className="tx-2">Bu qanday ishlaydi?</p>
                                </div>
                            </div>
                            <div className="dc-2">
                                <h1 className="tx-1">Biz bilan aloqa</h1>
                                <p className="tx-3">(+998 71) 200-54-00</p>
                                <p className="tx-2">100011, Toshkent sh. Shayxontohur tumani, <br/>
                                    Zarqaynar ko’chasi, 3B-uy</p>
                            </div>
                            <div className="dc-3 d-flex justify-content-between align-items-center">
                                <div className="dc-4">
                                    <p className="tx-11">© Maxway, 2020</p>
                                </div>
                                <div className="dc-5">
                                    <img className="tx-20" src="/images/Group.png" alt=""/>
                                    <img className="tx-21" src="/images/Group%20(1).png" alt=""/>
                                    <img className="tx-22" src="/images/Group%20(2).png" alt=""/>
                                    <img className="tx-23" src="/images/Group%20(3).png" alt=""/>
                                    <img className="tx-24" src="/images/tiktok-share-icon-black-seeklogo.com.png" alt=""/>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;