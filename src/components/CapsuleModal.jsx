import React from 'react';
import moment from 'moment';

const CapsuleModal = ({item, hideModal}) => {
    const capsuleId = item && item.capsule_id;
    const capsuleSerial = item && item.capsule_serial;
    const capsuleType = item && item.type;
    const capsuleStatus = item && item.status;
    const capsuleDetails = item && item.details;
    const landings = item && item.landings;
    const missions = item && item.missions;
    const originalLaunch = item && item.original_launch;
    const reuseCount = item && item.reuse_count;

    return (
        <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden  md:inset-0 h-full bg-black/50 overflow-hidden"
        >
            <div
                className="relative w-full h-full flex items-center justify-center"
                onClick={hideModal}
            >
                {/* <!-- Modal content --> */}
                <div
                    className="relative bg-white rounded-lg shadow w-full lg:w-6/12"
                    onClick={e => e.stopPropagation()} // stoping propagation of onClick={hideModal} on children
                >
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {capsuleType} - {capsuleSerial}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-hide="defaultModal"
                            onClick={hideModal}
                        >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Capsule Id:&nbsp;</span>
                           <span>{capsuleId || 'Not Available'}</span>
                        </div>
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Capsule Serial:&nbsp;</span>
                           <span>{capsuleSerial || 'Not Available'}</span>
                        </div>
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Type:&nbsp;</span>
                           <span>{capsuleType || 'Not Available'}</span>
                        </div>
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Status:&nbsp;</span>
                           <span>{capsuleStatus || 'Not Available'}</span>
                        </div>
                        <div className="text-base leading-relaxed text-gray-500">
                           <span>Original Launch:&nbsp;</span>
                           <span>{moment(originalLaunch).format("MMMM Do YYYY, h:mm:ss a") || 'Not Available'}</span>
                        </div>
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Details:&nbsp;</span>
                           <span>{capsuleDetails || 'Not Available'}</span>
                        </div>
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Landings:&nbsp;</span>
                           <span>{landings || 'Not Available'}</span>
                        </div>
                        {
                            missions && (missions.length>0) &&
                            <ul className="list-disc text-base leading-relaxed text-gray-500">
                                Mission:
                            {missions.map((mission, i) => (
                                <li className="text-base leading-relaxed text-gray-500 space-x-4 ml-3" key={i}>
                                    <span>Name:&nbsp;</span> {mission.name || 'Not Available'}
                                    <span>Flight:&nbsp;</span> {mission.flight || 'Not Available'}
                                </li>
                            ))}
                            </ul>
                        }
                        <div className="text-base leading-relaxed text-gray-500 flex">
                           <span>Reuse Count:&nbsp;</span>
                           <span>{reuseCount || 'Not Available'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CapsuleModal;
