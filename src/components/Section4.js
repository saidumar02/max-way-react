import React, {Component} from 'react';

class Section4 extends Component {
    render() {
        return (
            <section className="ft">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 cl6-1">
                            <h1 className="k1">Mobil ilovamiz <br/>
                                orqali buyurtma <br/>
                                berish yanada osonroq</h1>
                            <button className="btn-1">
                                <img className="btn-img-1" src="/images/Shape (1).png"/>Google play
                            </button>
                            <button className="btn-2">
                                <img className="btn-img-2" src="/images/Shape.png"/>App store
                            </button>
                        </div>
                        <img className="img-1" src="/images/Path-mobile.png" height="197" width="562"/>
                        <img className="img-2" src="/images/White.png" height="666" width="800"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section4;