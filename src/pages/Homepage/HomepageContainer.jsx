import { connect } from 'react-redux';
import { fetchCapsulesData } from '../../redux/action';
import Homepage from './Homepage';

// homepage container wrapping homepage component with mapStateToProps and mapDispatchToProps to access redux states and disptaches

const mapStateToProps = state => {
    const capsulesData = state?.capsulesReducer?.capsulesData?.data;
    const isRequesting = state?.capsulesReducer?.capsulesData?.isRequesting;
    console.log(capsulesData);
    return (
        {
            capsulesData,
            isRequesting
        }
    );
}
const mapDispatchToProps = dispatch => ({
    fetchCapsulesData: (status, type, originalDate) => (
        dispatch(fetchCapsulesData(status, type, originalDate))
    ),
});

const HomepageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);

export default HomepageContainer;
