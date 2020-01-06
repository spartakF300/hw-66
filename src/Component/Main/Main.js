import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import axiosApi from "../../axiosApi";
import withLoader from "../../hoc/withLoader";

class Main extends Component {
    state = {
        post: null,
    };
    getPost = async (e) => {
        e.preventDefault();
        const res = await axiosApi.get('/quote.json');
        console.log(res);
         this.setState({post: res.data})
    };



    render() {

        return  (
            <Fragment>
                <button onClick={this.getPost}> click</button>
            {this.state.post && Object.keys(this.state.post).map((post) => {
                return <div key={post}>
                    <Card>
                        <CardBody>
                            <CardTitle>{this.state.post[post].author}</CardTitle>
                            <CardText>{this.state.post[post].quote}</CardText>
                        </CardBody>
                    </Card>

                </div>
            })}
            </Fragment>
        )

    }
}

export default withLoader(Main, axiosApi);