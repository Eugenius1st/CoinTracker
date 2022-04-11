const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
    const response = await fetch(`${BASE_URL}/coins`);
    const json = await response.json();
    return json;
    //return return fetch(`${BASE_URL}/coins`).then((response) => response.json);
}

export async function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export async function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}
