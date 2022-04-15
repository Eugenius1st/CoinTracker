import ApexChart from "react-apexcharts";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

interface ChartProps {
    coinId: string;
    isDark: boolean;
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

export default function Chart({ coinId, isDark }: ChartProps) {
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

    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <>
                    <CoinName>{coinId}</CoinName>
                    <ApexChart
                        type="line"
                        series={[
                            {
                                name: "Price",
                                data: data?.map((price) => price.close) ?? [],
                            },
                        ]}
                        options={{
                            theme: {
                                mode: isDark ? "dark" : "light",
                            },
                            chart: {
                                height: 300,
                                width: 500,
                                toolbar: {
                                    show: false,
                                },
                                background: "transparent",
                            },
                            grid: { show: false },
                            stroke: {
                                curve: "smooth",
                                width: 4,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                type: "datetime",
                                categories: data?.map((price) => price.time_close),
                            },
                            fill: {
                                type: "gradient",
                                gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                            },
                            colors: ["#0fbcf9"],
                            tooltip: {
                                y: {
                                    formatter: (value) => `$${value.toFixed(2)}`,
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
                </>
            )}
        </div>
    );
}

const BtnWrapper = styled.div`
    margin-top: 2%;
    margin-left: 24%;
`;

const CoinName = styled.div`
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.accentColor};
`;
