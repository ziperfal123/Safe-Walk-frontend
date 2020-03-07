import {connect} from "react-redux";
import Login from './Login'
import {changeUserAuthStatus} from "../../redux/actions/actionsCreator";
import {handleLoginFormSubmit} from './redux/actionsCreator'


const mapStateToProps = state => {
    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { changeUserAuthStatus, handleLoginFormSubmit}

export default connect(mapStateToProps, mapDispatchToProps)(Login)