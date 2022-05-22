import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notfound extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* ======================= 404 ===================== */}
                <section>
                    <div className="container">
                        <div className="error-page padd-top-30 padd-bot-30">
                            <h1 className="mrg-top-15 mrg-bot-0 theme-cl font-250 font-bold">404</h1>
                            <h2 className="mrg-top-10 mrg-bot-5 funky-font font-60">You Missed</h2>
                            <p>The page you are looking for doesn't exist </p>
                            <Link to='/' className="btn theme-btn mrg-top-20">Go To Home Page</Link>
                        </div>
                    </div>
                </section>
                {/* ======================= End 404 ===================== */}

            </div>
        );
    }
}


export default Notfound;