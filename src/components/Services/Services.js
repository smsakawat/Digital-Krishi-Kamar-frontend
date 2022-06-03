import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import riadlogo1 from '../../asset/image/land.svg'
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";

class Services extends Component {
    constructor(){
        super();
        this.state={
            myData:[]
        }
    }
    
    componentDidMount(){
        RestClient.GetRequest(AppUrl.Svc).then(result => {
            this.setState({myData:result})
           

        }).catch(error=>{
            this.setState({title:"??????",subtitle:"??????"})
        })
    }
    


    render() {

        const myList=this.state.myData;
     const myView=myList.map(myList=>{
            return    <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
                <img src={myList.service_logo}/>
            <h1 className="serviceName">{myList.service_name}</h1>
                <p className="serviceDescription">{myList.service_description}
                </p>
            </div>

        </Col>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">SERVICES</h1>
                    <Row>

                        {myView}
                       
                        
                    </Row>

                </Container>
            </Fragment>
        )
            ;
    }
}

export default Services;