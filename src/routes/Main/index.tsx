import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ForkLeft } from "@mui/icons-material";
import Header from "../../Components/Header";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Container = styled.div`
    padding: 0px 24px;
    max-width: 480px;
    margin: 0 auto;
    padding-top: 13vh;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    border-radius: 20px;
    border-bottom: 3px solid #1f2b38;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 10px;
    padding: 10px;
    background-color: #1f2b3824;
    a {
        padding: 5px;
        transition: color 0.2s ease-in;
    }

    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
            font-weight: bold;
        }
    }
    span {
        font-size: 2em;
        margin-left: 0.5em;
    }
`;

const Loader = styled.span`
    font-size: 2em;
    text-align: center;
    display: block;
    margin-top: 30%;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    margin-left: 3%;
`;

interface ICoin {
    id: string;
    name?: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

export default function Main() {
    const [coins, setCoins] = useState<ICoin[]>([]);
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
            <Container>
                <Helmet>
                    <title>EugeneCoin</title>
                </Helmet>
                {loading ? (
                    <Loader>
                        <CurrencyExchangeIcon sx={{ fontSize: 100 }} />
                        <br />
                        Loading...
                    </Loader>
                ) : (
                    <CoinsList>
                        {coins.map((coin) => (
                            <Coin key={coin.id}>
                                <Link to={`/${coin.id}`} state={{ name: coin.name, rank: coin.rank }}>
                                    <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                                    <span>{coin.name} </span>
                                    <ArrowRightIcon />
                                </Link>
                            </Coin>
                        ))}
                    </CoinsList>
                )}
            </Container>
        </>
    );
}
