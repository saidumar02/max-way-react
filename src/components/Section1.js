import React, {Component} from 'react';

class Section1 extends Component {
    render() {
        return (
            <section className="sc1 mb-lg-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className={'p1'}>Siz izlagan <br/>
                                mazzali <br/>
                                ta’mlar</h1>
                            <p className={'p2'}>When an unknown printer took a galley of type
                                scrambled it to make a type specimen </p>
                            <div className="row">
                                <img className={'p3'} src="/images/Group 6.png" alt=""/>
                                <img className={'p4'} src="/images/Group 7.png" alt=""/>
                            </div>
                        </div>
                        <img className={'img-bitmap'} src="/images/Bitmap.png" alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section1;