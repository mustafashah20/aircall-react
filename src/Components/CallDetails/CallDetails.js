import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import * as api from '../../Api/AirCallApi';

const CallDetails = () => {

    const location = useLocation();
    const history = useHistory();

    const [call, setCall] = useState(null);

    useEffect(() => {
        setCall(location.state.call)
    }, [location]);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default CallDetails
