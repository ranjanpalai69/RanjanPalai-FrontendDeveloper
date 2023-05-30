import React, {useState} from 'react';
import {statusOptions, typeOptions} from '../constants/siteConstants';
// Have stored status and type options on seperate file so that our code is scalable and all changes can be done from one place only

const SubmitForm = ({fetchCapsulesData}) => {
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [originalDate, setOriginalDate] = useState('');

    const handleChange = (e) => {   // function to update states with the search values
        const query = e.target.value;
        const name = e.target.name;
        switch (name) {
            case 'status':
                setStatus(query);
                break;
            case 'type':
                setType(query);
                break;
            case 'datepicker':
                setOriginalDate(query);
                break;
            default:
                break;
        }
    }
    const handleFormSubmit = (e) => {   // makes api call with the search query
        e.preventDefault();
        fetchCapsulesData(status, type, originalDate);
    }
    
    return (
        <section style={{marginTop: '32px'}}>
            <form noValidate>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor="status"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Status:
                        </label>
                        <div className="relative">
                            <select
                                id="status"
                                name="status" 
                                onChange={handleChange}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                {statusOptions.map((option, i) => (
                                    <option value={option.value} key={i}>{option.label}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor="type"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Type:
                        </label>
                        <div className="relative">
                            <select
                                id="type"
                                name="type" 
                                onChange={handleChange}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                {typeOptions.map((option, i) => (
                                    <option value={option.value} key={i}>{option.label}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor="datepicker"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Original Launch:
                        </label>
                        <div className="relative">
                            <input
                                name="datepicker"
                                aria-label="datepicker"
                                type="datetime-local"
                                id="datepicker"
                                value={originalDate}
                                onChange={handleChange}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 flex justify-center items-center px-3 mb-6 md:mb-0">
                        <button
                            className="flex justify-center items-center w-64 px-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            type="button"
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
};

export default SubmitForm;