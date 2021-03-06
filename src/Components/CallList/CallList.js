import React, { useState, useEffect } from 'react';
import * as api from '../../Api/AirCallApi';
import CallListItem from '../CallListItem/CallListItem';


function CallList() {

    const [calls, setCalls] = useState(null)
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchCalls();

        // eslint-disable-next-line
    }, [])

    const fetchCalls = () => {
        api.getCalls(page, 10).then(
            data => {
                console.log(data);
                setCalls(data.nodes)
            }
        );
    }

    const nextPage = () => {
        api.getCalls(page + 1, 10).then(
            data => {
                console.log(data);
                setCalls(data.nodes)
                setPage(page + 1);
            }
        );
    }

    const previousPage = () => {
        api.getCalls(page - 1, 10).then(
            data => {
                console.log(data);
                setCalls(data.nodes)
                setPage(page - 1);
            }
        );
    }

    return (
        <div>
            {
                calls &&

                <ul className="list-group">
                    {
                        calls.map(call =>
                            (call.is_archived === false) ?
                                <CallListItem
                                    key={call.id}
                                    call_id={call.id}
                                    caller={call.from}
                                    call_type={call.call_type}
                                    direction={call.direction}
                                    created_at={call.created_at}
                                /> : null
                        )
                    }
                </ul>
            }
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-4 mt-3">
                    <button type="button"
                        className={`btn btn-outline-primary me-1 ${(page > 1 ? "" : "disabled")}`}
                        onClick={previousPage}>
                        Previous
                    </button>
                    <button type="button" className="btn btn-outline-primary ms-1"
                        onClick={nextPage}>
                        Next
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CallList
