import { useState, useEffect } from "react";

export const Fakultas = () => {

    const [fakultas, setFakultas] = useState([]);

    useEffect(() => {
        fetch('https://api.kompetegram.com/fakultas')
            .then((response) => response.json())
            .then((data) => {
                setFakultas(data.data.fakultas);
            })
            .catch((e) => {
                console.log('Error');
            });
    }, []);

    return fakultas;
}