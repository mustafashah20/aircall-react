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


    // call_type: "missed"
    // created_at: "2021-07-16T05:36:37.240Z"
    // direction: "outbound"
    // duration: 26105
    // from: "+33127661250"
    // id: "205191c4-fae5-4baa-9bc6-72e5f943d08f"
    // is_archived: false
    // notes: [{ … }]
    // to: "+33175493389"
    // via: "+33159746475"

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
