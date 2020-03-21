import { connect } from 'react-redux';
import PatientPage from './PatientPage';
import { getTestsById, cleanTestsById } from '../../../../redux/tests/actionsCreator';

const mapStateToProps = (state) => ({
  allTestsById: state.testsReducer.allTestsById,
});

const mapDispatchToProps = { getTestsById, cleanTestsById };

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);
