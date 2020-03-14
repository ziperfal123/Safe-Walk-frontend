import {connect} from "react-redux";
import Login from './Login'
import { handleLoginFormSubmit } from "../../redux/auth/actionsCreator";


const mapStateToProps = state => {
    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { handleLoginFormSubmit}

export default connect(mapStateToProps, mapDispatchToProps)(Login)