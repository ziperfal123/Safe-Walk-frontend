import { connect } from 'react-redux'
import TestPage from 'containers/TestPage/TestPage'
import { getGaitModelByTestId, cleanGaitModel } from 'redux/gaitModel/actionsCreator'
import { getTestById } from 'redux/tests/actionsCreator'

const mapStateToProps = (state) => ({
  gaitModel: state.gaitModelReducer.gaitModel,
  testById: state.testsReducer.testById,
  loadingGaitModel: state.gaitModelReducer.loadingGaitModel,
})

const mapDispatchToProps = { getGaitModelByTestId, cleanGaitModel, getTestById }

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)
