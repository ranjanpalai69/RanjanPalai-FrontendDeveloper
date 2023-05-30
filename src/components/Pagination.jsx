import React from 'react';

const Pagination = ({
    noOfPages,
    currentPage,
    setCurrentPage,
}) => {
    const pageNumbers = [...Array(noOfPages + 1).keys()].slice(1); // storing total pagenumbers in array
    const nextPage = () => {
        if(currentPage !== noOfPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const prevPage = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    return(
        <div className="flex justify-center mb-16 mt-8">
            <nav aria-label="Page navigation">
                <ul className="flex list-style-none">
                    <li className={`page-item ${(currentPage === 1) ? 'disabled' : ''}`}>
                        <button
                            href="#"
                            className={`
                                page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full
                                ${(currentPage === 1) ?
                                    'text-gray-500 pointer-events-none focus:shadow-none'
                                    :
                                    'text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                                }
                            `}
                            onClick={prevPage}
                        >
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map((pageNumber, i) => (
                        <li className={`page-item ${(currentPage === pageNumber) ? 'active' : ''}`} key={i}>
                            <button
                                href="#"
                                onClick={() => setCurrentPage(pageNumber)}
                                className={
                                    currentPage === pageNumber ?
                                        "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                                        :
                                        "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                }
                            >
                                {pageNumber}
                            </button>
                    </li>
                    ))}
                    <li className={`page-item ${(currentPage === noOfPages) ? 'disabled' : ''}`}>
                        <button
                            href="#"
                            className={`
                                page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full
                                ${(currentPage === noOfPages) ?
                                    'text-gray-500 pointer-events-none focus:shadow-none'
                                    :
                                    'text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                                }
                            `}
                            onClick={nextPage}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
