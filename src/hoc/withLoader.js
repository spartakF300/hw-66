import React, {Component, Fragment} from "react";
import Spinner from "../Component/Ui/Spinner/Spinner";
import Backdrop from "../Component/Ui/Backdrop/Backdrop";

const withLoader = (WrapComponent, axios) => {
    return class loading extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loader: false,
                interceptorId: null
            };



            this.state.interceptorId = axios.interceptors.response.use(res => {
                this.setState({loader: false});
                return res;
            });
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.state.interceptorId)
        }

        render() {
            return (
                <Fragment>
                    {this.state.loader && <Backdrop><Spinner/></Backdrop> }
                    <WrapComponent {...this.props}/>
                </Fragment>
            )
        }
    }
};
export default withLoader