import React from 'react'
import { SiAircall } from 'react-icons/si'

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col ms-3 me-2">
                            <SiAircall className="app-logo" />
                        </div>
                        <div className="col">
                            <span className="navbar-brand mb-0 h1">AirCall</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
