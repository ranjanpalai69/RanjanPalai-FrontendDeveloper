import React, { useEffect } from 'react';
import DataGrid from '../../components/DataGrid';
import HeroBanner from '../../components/HeroBanner';
import SubmitForm from '../../components/SubmitForm';

const Homepage = ({fetchCapsulesData, capsulesData, isRequesting}) => {

    useEffect(() => {
        fetchCapsulesData();    // making api call as soon as user lands on page
    }, []);

    return (
        <React.Fragment>
            <HeroBanner />
            <div className="container mx-auto px-4">
                <SubmitForm fetchCapsulesData={fetchCapsulesData} />
                <DataGrid
                    capsulesData={capsulesData}
                    isRequesting={isRequesting}
                />
            </div>
        </React.Fragment>
    );
};

export default Homepage;
