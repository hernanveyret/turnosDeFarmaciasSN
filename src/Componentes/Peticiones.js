import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './peticiones.css';
import logoMap from '../img/iconoMaps.png';

const Peticiones = ({ day, month, year, setLoader }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //const url = `https://farmacias-de-turno-sn.vercel.app/api/farmacias/${year}/${month + 1}/${day}`
  let url = `https://server-farmacias.vercel.app/api/farmacias/${year}/${month + 1}/${day}`
  console.log(url)

  useEffect(() => {
    
    console.log(url)

    setLoader(true);
    axios.get(url)
      .then(response => {
       // console.log(response)
        console.log(response.data)
        setData(response.data);
        setLoader(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError('Hubo un error al obtener los datos.');
        setLoader(false);
      });
  }, [day, month, year, setLoader,url]);


  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="containerFarmacias">
      <p>Letra: <span style={{ color: "green", fontWeight: "bold" }}>{data.dateShift}</span></p>
      {data.pharmacies.map((e, i) => (
        <div className="items" key={i}>
          <div className="infoItems">
            <p>{e.name}</p>
            <p>{e.address}</p>
          </div>
          <div className="btn-container">
            <button className="btn-map">
              <img src={logoMap} alt="Logo maps" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Peticiones;
