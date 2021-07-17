import React from 'react'
import { BiArchiveIn } from 'react-icons/bi';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';
import { FcMissedCall, FcCallback, FcVoicemail } from 'react-icons/fc'
import moment from 'moment';
import * as api from '../../Api/AirCallApi';

function CallListItem({ call_type, direction, created_at, caller, call_id }) {

    const callClickHandler = (id) => {
        api.getCallById(id).then(
            data => {
                console.log(data)
            }
        )
    }

    return (
        <li className="list-group-item" onClick={() => callClickHandler(call_id)}>
            <div className="row align-items-center">
                <div className="col-auto">
                    {
                        call_type === 'missed' &&
                        <FcMissedCall className="icon" />
                    }
                    {
                        call_type === 'voicemail' &&
                        <FcVoicemail className="icon" />
                    }
                    {
                        call_type === 'answered' &&
                        <FcCallback className="icon" />
                    }
                </div>
                <div className="col-10 col-sm-6">
                    <h5>{caller} </h5>
                    {
                        direction === 'inbound' &&
                        <VscCallIncoming className="icon-sm" />
                    }
                    {
                        direction === 'outbound' &&
                        <VscCallOutgoing className="icon-sm" />
                    }
                    <span className="ms-2">{moment(created_at).format("hh:mm a")}</span>
                </div>
                <div className="col-1 d-flex justify-content-end ms-auto">
                    <BiArchiveIn className="icon" />
                </div>
            </div>

        </li>
    )
}

export default CallListItem
