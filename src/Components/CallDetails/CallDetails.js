import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';
import { BsChevronLeft } from "react-icons/bs";

const CallDetails = () => {

    const location = useLocation();
    const history = useHistory();

    const [call, setCall] = useState(null);

    useEffect(() => {
        setCall(location.state.call);
    }, [location]);

    useEffect(() => {
        console.log(call);
    }, [call]);

    const backClickHandler = () => {
        history.replace('/');
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col-auto my-auto p-2">
                    <span onClick={backClickHandler}>
                        <BsChevronLeft className="back-icon" />
                    </span>
                </div>
                <div className="col my-auto ps-0">
                    <span className="back-text" onClick={backClickHandler}>Go Back</span>
                </div>
            </div>
            {
                call &&
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="card my-card">
                        <div className="card-body">
                            <div className="row ps-3">
                                <div className="col-md-12">
                                    <h4>CALL DETAILS</h4>
                                    <hr />
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col h5 heading">
                                            {call.direction} {call.call_type} Call
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col h7">
                                            created at: {moment(call.created_at).format("hh:mm a")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ps-3">
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col h6">Caller</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{call.from}</div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col h6">Callee</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{call.to}</div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col h6">Call Via</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{call.via}</div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col h6">Total Duration</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{moment.utc(call.duration).format("mm:ss")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <div className="col h6">Call Notes</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <ol className="list-group list-group-numbered">
                                                {
                                                    call.notes.map((note) =>
                                                        <li className="list-group-item" key={note.id}>
                                                            {note.content}
                                                        </li>
                                                    )
                                                }
                                            </ol>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default CallDetails
