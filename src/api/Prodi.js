import { useState, useEffect } from "react";

export const ProgramStudi = (fakultas) => {

    const [prodi, setProdi] = useState([]);

    useEffect(() => {
        fetch(`https://api.kompetegram.com/prodi/${fakultas}`)
            .then((response) => response.json())
            .then((data) => {
                setProdi(data.data.listProdi);
            })
            .catch((e) => {
                console.log('Error');
            });
    }, [fakultas]);

    return prodi;
}

