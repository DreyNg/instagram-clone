import { useNavigate } from "react-router-dom";

export default function Login() {
    const history = useNavigate();
    return <p class="underline">This is a login Page</p>;
}
