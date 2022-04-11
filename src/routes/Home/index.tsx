import styled from "styled-components";
import Header from "../../Components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <Wrapper>
                <div>Welcome </div>
                <div> this is Eugenius World</div>
                <Btn>Start</Btn>
                <Btn>Information</Btn>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding-top: 30vh;
    text-align: center;
`;

const Btn = styled.div`
    width: 70%;
    border: 1px solid white;
    text-align: center;
    margin: 0 auto;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 5%;
`;
