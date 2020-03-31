import { connect } from 'react-redux'
import { getGaitModelByTestId } from 'redux/gaitModel/actionsCreator'
import TestPage from 'containers/TestPage/TestPage'

const mapStateToProps = (state) => ({
  gaitModel: state.gaitModelReducer.gaitModel,
  loadingGaitModel: state.gaitModelReducer.loadingGaitModel,
})

const mapDispatchToProps = { getGaitModelByTestId }

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)
