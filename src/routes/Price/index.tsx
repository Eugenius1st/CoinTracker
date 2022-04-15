import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PersonPin } from "@mui/icons-material";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ChartProps {
    coinId: string;
}
interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

export default function Price({ coinId }: ChartProps) {
    const BASE_URL = `https://api.coinpaprika.com/v1`;
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    const [data, setData] = useState<IHistorical[]>([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`);
            const json = await response.json();
            setData(json);
            setisLoading(false);
        })();
    }, []);
    // const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    //나 진짜 useQuery 리액트 버전6 에서는 못쓰겠다... ㅠㅠ 모르겠어 그냥 !!
    //{ refetchInterval: 10000 } 이건 못해 ???
    return (
        <>
            {isLoading ? (
                "Loading price..."
            ) : (
                <Wrapper>
                    <CoinName>{coinId}</CoinName>
                    <ReactApexChart
                        type="candlestick"
                        name="candle"
                        series={[
                            {
                                data: data?.map((price) => [
                                    new Date(price.time_open).getTime(), // 날짜
                                    price.open, // 시작가
                                    price.high, // 최고가
                                    price.low, // 최저가
                                    price.close, // 종가
                                ]) as any,
                            },
                        ]}
                        options={{
                            theme: {
                                mode: "dark",
                            },
                            chart: {
                                type: "candlestick",
                                height: 350,
                                width: 500,
                                toolbar: {
                                    show: false,
                                },
                                background: "transparent",
                            },
                            stroke: {
                                curve: "smooth",
                                width: 2,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                type: "datetime",
                                categories: data?.map((price) => price.time_close),
                                labels: {
                                    style: {
                                        colors: "#9c88ff",
                                    },
                                },
                            },
                            plotOptions: {
                                candlestick: {
                                    colors: {
                                        upward: "#137bf9",
                                        downward: "#f94513",
                                    },
                                },
                            },
                        }}
                    />
                    <BtnWrapper>
                        <Button color="secondary">Info</Button>
                        <Button variant="contained" color="success">
                            Buy
                        </Button>
                        <Button variant="outlined" color="error">
                            Sell
                        </Button>
                    </BtnWrapper>
                </Wrapper>
            )}
        </>
    );
}
const Wrapper = styled.div`
    width: 440px;
    height: 500px;
`;

const CoinName = styled.div`
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
`;

const Img = styled.img`
    margin: 5%;
    width: 90%;
    height: 40%;
`;

const BtnWrapper = styled.div`
    margin-top: 2%;
    margin-left: 24%;
`;
