import styled from "styled-components";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {useQuery} from 'react-query'
// import { useHistory } from "react-router-dom";
// import {fetchCoins} from "../../api";

export default function Main() {
    // const [isLoading, data] = useQuery<ICoin[]>{'allCoins', fetchCoins}
    /*     const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []); */
    // let history = useHistory();
    return (
        <>
            <Header />
            {/* <Wrapper>
                {data?.slice(0,100).map((coin) => (
                    <Coin key={coin.id}>
                        <Img src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.name
                        .toLowerCase()
                        .split(" ").join("-")}.png`} />
                    </Coin>

            //             <Link
            //     to={{
            //       pathname: `/${coin.id}`,
            //       state: { name: coin.name },
            //       //Link를 이용해 string 이외에 더 많은 데이터를 보낼 수 있다
            //     }}
            //   >{coin.name} </Link>
                ))}
            </Wrapper> */}
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
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
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

/* interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
} */

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
