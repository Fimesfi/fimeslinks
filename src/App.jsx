import {useEffect} from 'react'
import axios from "axios";

function App() {
    useEffect(() => {

        const getLink = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/links${window.location.pathname}`);
                window.location.href = data.data.to;
            } catch (e) {
                window.location.href = 'https://fimes.fi'
            }
        }

        getLink();
    }, []);

    return (
        <>
            <p>Uudelleenohjataan...</p>
            <p>Redirecting...</p>
            <a href="https://fimes.fi">www.fimes.fi</a>
        </>
    )
}

export default App
