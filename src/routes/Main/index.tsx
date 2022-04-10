import styled from "styled-components";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);

    return (
        <>
            <Header />
            <Wrapper>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                        <Img src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.name.toLowerCase().split(" ").join("-")}.png`} />
                    </Coin>
                ))}
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 12vh 28px 0 28px;
    max-width: 500px;
`;

const Coin = styled.li`
    background-color: rgba(255, 255, 255, 0.6);
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    a {
        padding: 20px; // 좀 더 넓은 범위에서 transition 효과 적용 가능
        transition: color 0.2s ease-in;
        display: block; //화살표 범위 이상 클릭해도 transition 효과 적용 되도록
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Img = styled.img`
    width: 50px;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
