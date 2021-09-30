import { useState, useEffect } from "react";

export const Programstudi = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.kompetegram.com/prodi')
            .then((response) => response.json())
            .then((data) => {
                setData(data.data.prodi);
            })
            .catch((e) => {
                console.log('Error');
            });
    }, []);

    return data;
}

export const institusi = [
    {
      fakultas: "Cibiru",
      listProdi: [
        {
          nama: "RPL",
          kode: "G505"
        },
        {
          nama: "Tekkom",
          kode: "G606"
        }
      ]
    },
    {
      fakultas: "FPMIPA",
      listProdi: [
        {
          nama: "Ilmu Komputer",
          kode: "F505"
        },
        {
          nama: "Pendidikan Ilmu Komputer",
          kode: "F606"
        }
      ]
    }
];