import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

export default function Header() {
    const navigate = useNavigate();
    const setterDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setterDarkAtom((prev) => !prev);
    return (
        <>
            <Wrapper>
                <Wrapper2>
                    <button onClick={() => navigate(-1)}>
                        <ArrowBackIosNewIcon sx={{ fontSize: 30, color: "white" }} />
                    </button>
                    <span>Coin Tracker</span>
                    <button onClick={toggleDarkAtom}>
                        <BrightnessMediumIcon sx={{ fontSize: 30, color: "white" }} />
                    </button>
                </Wrapper2>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background-color: #1f2b38;
    position: fixed;
    width: 100vw;
    height: 10vh;
`;

const Wrapper2 = styled.div`
    background-color: #1f2b38;
    max-width: 500px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    span {
        font-weight: bold;
        color: ${(props) => props.theme.accentColor};
    }
`;
