import { useParams } from "react-router-dom";

export default function Coin() {
    const { coinId } = useParams<{ coinId: string }>();
    return <h1>{coinId}</h1>;
}
