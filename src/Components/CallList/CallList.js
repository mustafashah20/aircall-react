import React, { useState, useEffect } from 'react';
import * as api from '../../Api/AirCallApi';
import { BiArchiveIn } from 'react-icons/bi';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';
import { FcMissedCall, FcCallback, FcVoicemail } from 'react-icons/fc'


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

    const callClickHandler = (id) => {
        api.getCallById(id).then(
            data => {
                console.log(data)
            }
        )
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
                        calls.map((call) => {
                            if (!call.is_archived) {
                                return <li className="list-group-item"
                                    key={call.id}
                                    onClick={() => callClickHandler(call.id)}>
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            {
                                                call.call_type === 'missed' &&
                                                <FcMissedCall className="icon" />
                                            }
                                            {
                                                call.call_type === 'voicemail' &&
                                                <FcVoicemail className="icon" />
                                            }
                                            {
                                                call.call_type === 'answered' &&
                                                <FcCallback className="icon" />
                                            }
                                        </div>
                                        <div className="col-10 col-sm-6">
                                            <h5>{call.from} </h5>
                                            {
                                                call.direction === 'inbound' &&
                                                <VscCallIncoming className="icon-sm" />
                                            }
                                            {
                                                call.direction === 'outbound' &&
                                                <VscCallOutgoing className="icon-sm" />
                                            }
                                        </div>
                                        <div className="col-1 d-flex justify-content-end ms-auto">
                                            <BiArchiveIn className="icon" />
                                        </div>
                                    </div>
                                </li>
                            }
                        })
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
