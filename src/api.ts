const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fethCoins() {
    // const response = await fetch(`${BASE_URL}/coins`);
    // const json = await response.json();
    // return json; 같은 코드임
    return fetch(`${BASE_URL}/coins`).then((response) => response.json);
}
