import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ArticlesS1 from "../components/articles-s1";
import ArticlesS2 from "../components/articles-s2";
import ArticlesS3 from "../components/articles-s3";

class Articles extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ArticlesS1/>
                <ArticlesS2/>
                <ArticlesS3/>
            </Container>    
        );
    }
}

export default Articles;
