import React, { useState } from 'react';
import Capsule from './Capsule';
import Loader from './Loader';
import Pagination from './Pagination';

const DataGrid = ({
    capsulesData,
    isRequesting
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const indexOfLastRecord = currentPage * recordsPerPage; // storing index of last data value of current page
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;  // storing first data index
    const hasData = capsulesData && (capsulesData.length > 0);// checking for data
    const currentRecords = hasData && capsulesData.slice(indexOfFirstRecord, indexOfLastRecord); // array storing current page records
    const noOfPages = hasData && Math.ceil(capsulesData.length / recordsPerPage); // calculating no of pages
    
    return (
        <React.Fragment>
            {hasData &&
                <div className="text-3xl font-bold mt-4 mb-4" id="data-grid">
                    Result:
                </div>
            }
            <div>
                {
                    isRequesting ?
                        <Loader />
                    :
                    hasData ? 
                        <React.Fragment>
                            {currentRecords.map((item, i) => (
                                <Capsule item={item} key={i} />
                            ))}
                            <Pagination
                                noOfPages={noOfPages}
                                currentPage={currentPage} 
                                setCurrentPage={setCurrentPage}
                            />
                        </React.Fragment>
                        :
                            <div className="mt-16 mb-16 flex justify-center align-center text-xl">
                                Sorry, No data found!
                            </div>
                }
            </div>
        </React.Fragment>
    );
};

export default DataGrid;
