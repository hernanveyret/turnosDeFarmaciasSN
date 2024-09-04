import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Almanac from './Almanac';
import AlmanacDay from './AlmanacDay';
import Settings from './Settings';
import Peticiones from './Peticiones';
import Loader from './Loader';

import './home.css';

const Home = () => {
  const meces = [
    {
      id: 0,
      mes:"Enero"
    },
    {
      id: 1,
      mes:"Febrero"
    },
    {
      id: 2,
      mes:"Marzo"
    },
    {
      id: 3,
      mes:"Abril"
    },
    {
      id: 4,
      mes:"Mayo"
    },
    {
      id: 5,
      mes:"Junio"
    },
    {
      id: 6,
      mes:"Julio"
    },
    {
      id: 7,
      mes:"Agosto"
    },
    {
      id: 8,
      mes:"Septiembre"
    },
    {
      id: 9,
      mes:"Octubre"
    },
    {
      id: 10,
      mes:"Noviembre"
    },
    {
      id: 11,
      mes:"Diciembre"
    },
  ]
  let headerRef = useRef();
  let bodyRef = useRef()
  let fotterRef = useRef()
  let cardHeaderRef = useRef()

  let localConfig = localStorage.getItem('settingsFarmacia')
  const [ initConfig, setInitConfig ] = useState(localConfig ? JSON.parse(localConfig) : { 
    modoNocturno: false,
    almanacType: true
  });
  
  const [ almanacType, setAlmanacType ] = useState(initConfig.almanacType)
  const [ modoNocturno, setModoNocturno ] = useState(initConfig.modoNocturno)
  const [ loader, setLoader ] = useState(false)
  const [ fecha, setFecha ] = useState(new Date())
  const [ day, setDay ] = useState(fecha.getDate()); // dia en numero.
  const [ dayString, setDayString ] = useState(fecha.toLocaleString('es-ES', { weekday: 'long' }));
  const [ month, setMonth ] = useState(fecha.getMonth()); // mes en numero.
  //const [ monthString, setMonthString ] = useState(fecha.toLocaleString('es-ES', { month: 'long' }))
  const [ monthString, setMonthString ] = useState(meces.find(m => m.id === month).mes)
  const [ year, setYear ] = useState(fecha.getFullYear()); // año
  const [ cantDiasMes, setCantDiasMes ] = useState(new Date(year, month + 1, 0).getDate()); // Ultimo dia del mes anterior
  const [ celdasVacias, setCeldasVacias ] = useState(new Date(year, month, 1).getDay()) // Posicion del primer dia del mes, del 0 al 6, dom-lun...
  
  /*


  // Crea una nueva instancia de Date para el 3 de septiembre de 2024
const fechaEspecifica = new Date(2024, 8, 3); // El mes es 0-indexado, así que septiembre es 8

// Obtén el nombre del día de la semana en español
const diaDeLaSemana = fechaEspecifica.toLocaleString('es-ES', { weekday: 'long' });

console.log(diaDeLaSemana); // Por ejemplo, "martes"
*/

  /*
  console.log('dia:', day)
  console.log('dia string:',dayString)
  console.log('mes:', month)
  console.log('mes string:', monthString)
  console.log('año:', year)
  console.log('ultimo dia del mes anterior', cantDiasMes) // ultimo dia del mes anterior
  console.log('celvas vacias', celdasVacias); // posicion del primer dia del mes del 0 al 6.
  */

  // Mes anterior
  const handlePrev = () => {
    month === 0 ? setMonth(0) : setMonth(month - 1);
  }
  //Mes siguiente
  const handleNext = () => {
     month === 11 ? setMonth(11) : setMonth(month + 1);
  }
  // Dia  anterior
  const handleChangeDayStringPrev = () => {
    console.log('prev')
      if(day===1){
        setDay(new Date(year, month, 0).getDate())
        handlePrev()
        return
      }
      setDay(day - 1)
  };

  // Dia siguiente
  const handleChangeDayStringNext = () => {
    if(day===cantDiasMes){
      setDay(1)
      handleNext()
      return
    }
    setDay(day + 1) 
  }
// cambia dayString segun el dia
  useEffect(() => {
    let algo = new Date(year,month,day)
    let diaDeLaSemana = algo.toLocaleString('es-ES', { weekday: 'long' })
    setDayString(diaDeLaSemana)
  },[day,month]);

  useEffect(() => {
    setCantDiasMes(new Date(year, month + 1, 0).getDate())
    setCeldasVacias(new Date(year, month, 1).getDay())
    setMonthString(meces.find(m => m.id === month).mes)
  },[month,year, meces])

  // el metodo trim() elimina los espacios vacios de lo que traiga el target
  const handleDay = (e) => {
    let textContent = e.currentTarget.textContent.trim();
    if (textContent !== '') {      
      textContent = parseInt(textContent)
      setDay(textContent)
    }
  };
  
  const seeInMaps = () => {
    console.log('ver en mapa')
  }

  const settingOptions = () => {
    const panelSetting = document.getElementById('panelSetting');
    panelSetting.classList.toggle('activatePanel')
  }
  // Cambia el typo de almanaque
  const handleChangeAlmanacType = () => {
    setAlmanacType(prevType => !prevType); 
  };
  
  useEffect(() => {
    const updatedConfig = {
      ...initConfig,
      almanacType: almanacType,
    };
  
    setInitConfig(updatedConfig);
    localStorage.setItem('settingsFarmacia', JSON.stringify(updatedConfig));
  }, [almanacType]);

  // Cambio de normal a modo nocturno
  useEffect(() => {    
    const updatedConfig = {
      ...initConfig,
      modoNocturno: modoNocturno
    };
    setInitConfig(updatedConfig);
    localStorage.setItem('settingsFarmacia', JSON.stringify(updatedConfig));
    
    if(modoNocturno === true ) {
      headerRef.current.classList.add('activateDarkMode')
      fotterRef.current.classList.add('activateDarkMode')
      bodyRef.current.classList.add('activateDarkModeBody');
        if(cardHeaderRef.current) { // si el componente esta montado activa la clase
          cardHeaderRef.current.classList.add('activateDarkMode');
        }
    }else{
      headerRef.current.classList.remove('activateDarkMode')
      fotterRef.current.classList.remove('activateDarkMode')
      bodyRef.current.classList.remove('activateDarkModeBody');
        if(cardHeaderRef.current){
          cardHeaderRef.current.classList.remove('activateDarkMode');
        }
    }
  },[modoNocturno]);
  
  return (
    <div className="containerHome" ref={bodyRef}>
         { loader && <Loader />}
      <header ref={headerRef}>
        <h1>Farmacias de turno SN</h1>
        <button className="btn-menu" onClick={settingOptions}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
        </button>
      </header>
      <main>
            <Settings 
              settingOptions={settingOptions}
              handleChangeAlmanacType={handleChangeAlmanacType} 
              setModoNocturno={setModoNocturno}
              modoNocturno={modoNocturno}
              almanacType={almanacType}
              
              />
        <article className="almanaque">
          { almanacType ? <Almanac 
              day={day}
              month={month}
              monthString={monthString} 
              year={year} 
              cantDiasMes={cantDiasMes} 
              celdasVacias={celdasVacias} 
              handlePrev={handlePrev} 
              handleNext={handleNext} 
              handleDay={handleDay}
          /> :
            <AlmanacDay 
              day={day}
              month={month}
              monthString={monthString}
              year={year}
              dayString={dayString}
              handlePrev={handlePrev} 
              handleNext={handleNext}
              handleChangeDayStringPrev={handleChangeDayStringPrev}
              handleChangeDayStringNext={handleChangeDayStringNext}
              cardHeaderRef={cardHeaderRef}
              />
          }  
        </article>
        <article className="farmacias">
        <h2>Datos de Farmacias</h2>
            <Peticiones
              day={day}
              month={month}
              year={year}
              setLoader={setLoader}
            />
        </article>
      </main>
      <footer ref={fotterRef}>
        <p>Hernán Luis Veyret-2024</p>
      </footer>
    </div>
  )
}

export default Home;

// modo calendario meces: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
// modo calendario dias: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>