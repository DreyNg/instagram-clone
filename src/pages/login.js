import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
    const history = useHistory();
    return <p class="underline">This is a login Page</p>;
}
