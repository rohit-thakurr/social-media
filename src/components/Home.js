
import styled from "styled-components";
import Header from "./Header";

import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Main from "./Main";

import { Redirect } from "react-router-dom";
import { connect, Connect } from "react-redux";

const Home = (props) =>{
    return (<div>

            {!props.user && <Redirect to="/" /> }
            {/* <Header/> */}
            <Container>

                <Section>
                    <h5> <a> Hiring in a Hurry ? -- </a> </h5>
                    <p> Find talented pros in record time with Upwork and keep buissness moving</p>
                </Section>

                <Layout>
                    <Leftside/>
                    <Main/>
                    <Rightside/>
                </Layout>
            </Container>

             </div>);
};

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.div`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;

    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 700;
        }
    }

    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media(max-width: 768px){
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display : grid;
    grid-template-areas : "leftside main rightside";
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
    
`;

const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
    }
}
export default connect(mapStateToProps)(Home);


