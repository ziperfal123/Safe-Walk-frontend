import { connect } from 'react-redux';
import { getTestsById, cleanTestsById } from 'redux/tests/actionsCreator';
import PatientPage from './PatientPage';

const mapStateToProps = (state) => ({
  allTestsById: state.testsReducer.allTestsById,
  allPlansById: state.plansReducer.allPlansById,
  loadingAllPlansById: state.plansReducer.loadingAllPlansById,
});

const mapDispatchToProps = {
  getTestsById, cleanTestsById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);
