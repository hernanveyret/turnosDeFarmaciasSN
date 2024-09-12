import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './peticiones.css';

const Peticiones = ({hora, day,setDay, month, year, setLoader,setMonth }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [array, setArray] = useState([])
  const [letra, setLetra] = useState('')

  //const url = 'http://localhost:5000/2024'
  const url = 'https://raw.githubusercontent.com/hernanveyret/farmaciasDeTurnoSN/main/src/Api/farmacias2024.json'

  const convertToTime = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(':');
    return new Date(2024, 0, 1, hours, minutes, seconds).getTime();
  };

  const horaActual = convertToTime(hora);
  const inicio = convertToTime('00:00:00');
  const fin = convertToTime('08:30:00');

  useEffect(() => {
  
    setLoader(true);
    axios.get(url)
      .then(response => {
       //console.log(response) 
        setData(response.data);
        setLoader(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError('Hubo un error al obtener los datos.');
        setLoader(false);
      });
  }, []);

useEffect(() => {

  if(horaActual >= inicio && horaActual <= fin){
    //console.log('muestra letra del dia anteior')
    if (data) {
      setLoader(true)
      const newArray = [];
      if(data[year][month][month+1][day-2]){
        data[year][month][month+1][day-2].pharmacies.forEach(e => {
          newArray.push(e);
        });
      }else{
        setLoader(false);
        return
      }
      setArray(newArray); 
      setLetra(data[year][month][month+1][day-2].dateShift.toUpperCase())
      setLoader(false)
    }
    
  }else{
    //console.log('Muestra la letra del dia actual')
  if (data) {
    setLoader(true);
    const newArray = []; 
    if(data[year][month][month+1][day-1]){
      data[year][month][month+1][day-1].pharmacies.forEach(e => {
        newArray.push(e);
      });
    }else{
      setLoader(false);
      return
    }
    setArray(newArray); 
    setLetra(data[year][month][month+1][day-1].dateShift.toUpperCase());
    setLoader(false);
  }
}
}, [data, month, day]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div></div>;
  }
  return (
    <div className="containerFarmacias">
      <h2>Datos de Farmacias</h2>
      <p>Letra: <span style={{ color: "green", fontWeight: "bold" }}>{letra}</span></p>
      {array.map((e, i) => (
        <div className="items" key={i}>
          <div className="infoItems">
            <p>{e.name}</p>
            <p>{e.address}</p>
            <p>{e.tel}</p>
          </div>
          <div className="btn-container">
          <a href={`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lon}`} rel="noopener" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA3323">
              <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
            </svg>
          </a>  
          </div>
        </div>
      ))}
    </div>
  );
};
export default Peticiones;