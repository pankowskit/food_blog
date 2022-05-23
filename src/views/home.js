import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import IndexS1 from "../components/index-s1";
import IndexS2 from "../components/index-s2";
import IndexS3 from "../components/index-s3";

class Home extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <IndexS1/>
                <IndexS2/>
                <IndexS3/>
            </Container>    
        );
    }
}

export default Home;