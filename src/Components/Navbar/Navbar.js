import React from 'react';
import { SiAircall } from 'react-icons/si';

const navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col pe-0">
                            <SiAircall className="app-logo" />
                        </div>
                        <div className="col">
                            <span className="navbar-brand mb-0 h1">AirCall</span>
                        </div>
                        {/* <div className="col">
                            <button className="btn btn-sm btn-primary" onClick={refreshToken}>refresh</button>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
