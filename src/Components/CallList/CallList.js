import React, { useEffect } from 'react';
import * as api from '../../Api/AirCallApi';

function CallList() {

    useEffect(() => {
        api.getCalls();
    }, [])


    return (
        <div>
            Call List
        </div>
    )
}

export default CallList
