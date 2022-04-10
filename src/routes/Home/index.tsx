import styled from "styled-components";
import Header from "../../Components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <Wrapper>
                <div>Hedddddddddddddddddddddddddddddddddddddddllo</div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    max-width: 480px;
    margin: 0 auto;
    border: 1px solid red;
`;
