import React, { useState, useEffect } from 'react';
import * as api from '../../Api/AirCallApi';

function CallList() {

    const [calls, setCalls] = useState(null)
    const [page, setPage] = useState(1);
    const [callsCount, setCallsCount] = useState(10);

    useEffect(() => {
        fetchCalls();
    }, [])

    const fetchCalls = () => {
        api.getCalls(page, callsCount).then(
            data => {
                console.log(data);
                setCalls(data.nodes)
            }
        );
    }

    const nextPage = () => {
        setPage(page + 1);
        fetchCalls();
    }

    const previousPage = () => {
        setPage(page - 1);
        fetchCalls();
    }

    return (
        <div>
            {
                calls &&

                <ul className="list-group">
                    {
                        calls.map((call) => (
                            <li className="list-group-item" key={call.id}>
                                From = {call.from}
                            </li>
                        ))
                    }
                </ul>
            }
            {
                page > 1 &&

                <button onClick={previousPage}>
                    Previous
                </button>
            }
            <button onClick={nextPage}>
                Next
            </button>
        </div>
    )
}

export default CallList
