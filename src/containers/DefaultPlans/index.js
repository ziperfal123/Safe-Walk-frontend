import { connect } from 'react-redux'
import DefaultPlans from "containers/DefaultPlans/DefaultPlans";
import {getAllDefaultPlans} from "redux/defaultPlans/actionsCreator";
import defaultPlansReducer from "redux/defaultPlans/reducer";


const mapStateToProps = (state) => ({
  allDefaultPlans: state.defaultPlansReducer.allDefaultPlans,
  loadingAllDefaultPlans: state.defaultPlansReducer.loadingAllDefaultPlans,
})

const mapDispatchToProps = { getAllDefaultPlans }

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPlans)
