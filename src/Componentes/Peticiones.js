import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './peticiones.css';
import logoMap from '../img/iconoMaps.png';

const Peticiones = ({hora, day, month, year, setLoader }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const convertToTime = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(':');
    return new Date(1970, 0, 1, hours, minutes, seconds).getTime();
  };

  const horaActual = convertToTime(hora);
  const inicio = convertToTime('00:00:00');
  const fin = convertToTime('08:30:00');

  let url = `https://server-farmacias.vercel.app/api/farmacias/${year}/${month + 1}/${day}`
  

  useEffect(() => {
   
    if(horaActual >= inicio && horaActual <= fin){
      console.log('muestra letra del dia anteior')
      setLoader(true);
      axios.get(`https://server-farmacias.vercel.app/api/farmacias/${year}/${month + 1}/${day - 1}`)
        .then(response => {
         // console.log(response)
          //console.log(response.data)
          setData(response.data);
          setLoader(false);
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
          setError('Hubo un error al obtener los datos.');
          setLoader(false);
        });

    }else{
      console.log('muestra letra del dia actual')
      setLoader(true);
      axios.get(url)
      .then(response => {
       // console.log(response)
        //console.log(response.data)
        setData(response.data);
        setLoader(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError('Hubo un error al obtener los datos.');
        setLoader(false);
      });
    }
    
  }, [day, month, year, setLoader,url,hora]);

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
          { /* <button className="btn-map">
              <img src={logoMap} alt="Logo maps" />
            </button>  */ }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Peticiones;