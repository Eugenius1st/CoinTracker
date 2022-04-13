import styled, { keyframes } from "styled-components";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

export default function Home() {
    return (
        <>
            <Wrapper>
                <IconStyle>
                    <CurrencyBitcoinIcon sx={{ fontSize: 100 }} />
                </IconStyle>
                <Name> EugeneCoin </Name>
                <Link to="/main">
                    <Btn style={{ backgroundColor: "#1f2b38", fontWeight: "bold" }}>Start</Btn>
                </Link>
                <Link to="/info">
                    <Btn>Information</Btn>
                </Link>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    max-width: 480px;
    margin: 0 auto;
    margin-top: 15vh;
    text-align: center;
    color: ${(props) => props.theme.accentColor};
`;

const Name = styled.div`
    color: #f1c40f;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 17%;
`;

const IconStyle = styled.div`
    margin: 0 auto;
    width: fit-content;
    padding: 7%;
    border-radius: 50%;
    background-color: #1f2b38;
    margin-bottom: 3%;
    border: 7px solid #f1c40f;
    animation: rotate_image 1s linear infinite;
    @keyframes rotate_image {
        0% {
            transform: rotateY(-50deg);
        }
        50% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(50deg);
        }
    }
`;

const Btn = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 25px;
    border-radius: 10px;
    margin-top: 3%;
    padding: 2% 1% 3% 1%;
    color: white;
    &:hover {
        background-color: #1f2b38;
        color: ${(props) => props.theme.accentColor};
        font-weight: bold;
    }
`;
