import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";


class TopBanner extends Component {

    constructor() {
        super();
        this.state = {
            title: ",,,,,,,,,,",
            subtitle: ",,,,,,,,,"
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTitle).then(result => {
            this.setState({title: result[1]['home_title'], subtitle: result[1]['home_subtitle']})

        }).catch(error=>{
            this.setState({title:"??????",subtitle:"??????"})
        })

    }


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    <Button variant="success"><Link className="linkStyle"
                                                                    to="/contact">MORE INFO</Link></Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;