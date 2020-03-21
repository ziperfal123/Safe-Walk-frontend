import { connect } from 'react-redux';
import Tests from './Tests';
import { getAllPatients } from 'redux/patients/actionsCreator';
import { getAllTests } from 'redux/tests/actionsCreator';

const mapStateToProps = (state) => ({
  allPatients: state.patientsReducer.allPatients,
  allTests: state.testsReducer.allTests,
  loadingAllTests: state.testsReducer.loadingAllTests,
});

const mapDispatchToProps = { getAllPatients, getAllTests };

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
