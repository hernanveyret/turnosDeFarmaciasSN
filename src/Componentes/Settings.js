import React from 'react';
import './settings.css';
const Settings = ({settingOptions,almanacType,handleChangeAlmanacType,setModoNocturno,modoNocturno,ubication,setUbication,shared,setShared, setOnQr}) => {

  const sharedApp = () => {
    navigator.clipboard.writeText('https://turnos-de-farmacias-sn.vercel.app/') // copia el texto en el portapapeles del dispositivo
    .then(() => {
      setShared(true)
      setTimeout(() => {
       setShared(false)
      }, 3000);
    })
    .catch(()=> {
      console.log('Error al compiar el link al portapapeles')
    })
  }

  return (
    <div className="containerSettings" id="panelSetting">
      
      <div className="nav">
      <svg xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="#000000">
          <path d="m416-132-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l91 68-64 112-104-45q-21 18-42 30.5T558-245l-14 113H416Zm24-28h78l15-109q30-8 53.5-21.5T636-329l100 43 40-68-88-66q5-18 6.5-32t1.5-28q0-15-1.5-28t-6.5-30l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 49 38t57 22l13 108Zm38-232q37 0 62.5-25.5T566-480q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 37 25.5 62.5T478-392Zm2-88Z"/>
      </svg>
        <button className="" onClick={settingOptions} title="Cerrar Menu">
          <svg xmlns="http://www.w3.org/2000/svg"
           height="24px" viewBox="0 -960 960 960" 
           width="24px" 
           fill="#000000">
            <path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/>
          </svg>
        </button>
      </div>
      <nav>
        <div className="form">
          <div>
            <button onClick={() => {setModoNocturno(prevMode => !prevMode); settingOptions()}} title="Modo oscuro/claro">        
            {
              modoNocturno ?
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF55"><path d="M460-743.08v-135.38h40v135.38h-40Zm219.85 91.54-27.31-27.31 94.31-98.07 29.07 29.3-96.07 96.08ZM743.08-460v-40h135.38v40H743.08ZM460-81.54v-134.61h40v134.61h-40ZM281.69-652.77l-98.61-94.08 30.07-28.3 96.08 95.3-27.54 27.08Zm464.93 469.69-94.08-98.07 27.08-26.31 95.53 93.84-28.53 30.54ZM81.54-460v-40h135.38v40H81.54Zm130.84 276.92-27.53-30.07 94.3-94.31 14.39 13.92 15.15 14.16-96.31 96.3ZM480.18-280q-83.26 0-141.72-58.28Q280-396.56 280-479.82q0-83.26 58.28-141.72Q396.56-680 479.82-680q83.26 0 141.72 58.28Q680-563.44 680-480.18q0 83.26-58.28 141.72Q563.44-280 480.18-280Z"/></svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-160q133 0 226.5-93.5T680-480q0-133-93.5-226.5T360-800h-21q-10 0-19 2 57 66 88.5 147.5T440-480q0 89-31.5 170.5T320-162q9 2 19 2h21Zm0 40q-31.56 0-61.62-5.42-30.07-5.43-58.38-17.81 76.08-62.46 118.04-150.23Q400-381.23 400-480t-41.96-186.54Q316.08-754.31 240-816.77q28.31-12.38 58.38-17.81Q328.44-840 360-840q74.7 0 140.4 28.34t114.3 76.92q48.6 48.58 76.95 114.26Q720-554.81 720-480.13q0 74.67-28.35 140.41-28.35 65.73-76.95 114.36-48.6 48.63-114.3 76.99Q434.7-120 360-120Zm80-360Z"/></svg>
            }
            </button>
          </div>
          <div>
            <button onClick={handleChangeAlmanacType}title="Almanaque tipo meses">
            { almanacType ?
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
              :  
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M224.62-120q-27.62 0-46.12-18.5Q160-157 160-184.62v-510.76q0-27.62 18.5-46.12Q197-760 224.62-760h70.76v-89.23h43.08V-760h286.16v-89.23h40V-760h70.76q27.62 0 46.12 18.5Q800-723 800-695.38v510.76q0 27.62-18.5 46.12Q763-120 735.38-120H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-350.76H200v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM200-575.39h560v-119.99q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v119.99Zm0 0V-720-575.39Zm280 181.54q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.57 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.57 0 12.39-9.19 21.58-9.2 9.19-21.58 9.19Zm-160 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.57 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.57 0 12.39-9.19 21.58-9.2 9.19-21.58 9.19Zm320 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.57 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.19 9.19 21.57 0 12.39-9.19 21.58-9.2 9.19-21.58 9.19ZM480-240q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.39-9.19 21.58Q492.38-240 480-240Zm-160 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.39-9.19 21.58Q332.38-240 320-240Zm320 0q-12.38 0-21.58-9.19-9.19-9.19-9.19-21.58 0-12.38 9.19-21.58 9.2-9.19 21.58-9.19 12.38 0 21.58 9.19 9.19 9.2 9.19 21.58 0 12.39-9.19 21.58Q652.38-240 640-240Z"/></svg>
            }
            </button>
          </div>
          <div>
            <button onClick={handleChangeAlmanacType} title="Almanaque tipo día">
            {
              almanacType ?
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M224.62-120q-27.62 0-46.12-18.5Q160-157 160-184.62v-510.76q0-27.62 18.5-46.12Q197-760 224.62-760h70.76v-89.23h43.08V-760h286.16v-89.23h40V-760h70.76q27.62 0 46.12 18.5Q800-723 800-695.38v510.76q0 27.62-18.5 46.12Q763-120 735.38-120H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-350.76H200v350.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM200-575.39h560v-119.99q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v119.99Zm0 0V-720-575.39Z"/></svg>
              :    
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
            } 
            </button>
          </div>
          <div>
            <button onClick={() => {setUbication(prevMode => !prevMode); settingOptions()}} title="Distancia">        
            {
              ubication ?
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            }
            </button>
          </div>
          <div>
            <button onClick={() => { sharedApp(); settingOptions()}} title="Copiar url al portapapeles">        
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M659.76-132q-36.76 0-62.26-25.67Q572-183.33 572-220q0-6 6-31L288-424q-12 15-30.14 23.5Q239.73-392 219-392q-36.25 0-61.62-26Q132-444 132-480t25.38-62q25.37-26 61.62-26 20.73 0 38.86 8.5Q276-551 288-536l290-172q-3-8-4.5-16t-1.5-16q0-36.67 25.74-62.33Q623.47-828 660.24-828q36.76 0 62.26 25.74 25.5 25.73 25.5 62.5 0 36.76-25.67 62.26Q696.67-652 660-652q-21 0-38.5-9T592-685L302-512q3 8 4.5 16t1.5 16q0 8-1.5 16t-4.5 16l290 173q12-15 29.5-24t38.5-9q36.67 0 62.33 25.74Q748-256.53 748-219.76q0 36.76-25.74 62.26-25.73 25.5-62.5 25.5Zm.24-28q25.5 0 42.75-17.25T720-220q0-25.5-17.25-42.75T660-280q-25.5 0-42.75 17.25T600-220q0 25.5 17.25 42.75T660-160ZM219-420q25.93 0 43.46-17.25Q280-454.5 280-480t-17.54-42.75Q244.93-540 219-540q-25.07 0-42.04 17.25Q160-505.5 160-480t16.96 42.75Q193.93-420 219-420Zm441-260q25.5 0 42.75-17.25T720-740q0-25.5-17.25-42.75T660-800q-25.5 0-42.75 17.25T600-740q0 25.5 17.25 42.75T660-680Zm0 460ZM220-480Zm440-260Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M424.62-316.92H283.08q-67.68 0-115.38-47.69Q120-412.3 120-479.96t47.7-115.39q47.7-47.73 115.38-47.73h141.54v40H283.08q-50.77 0-86.93 36.16Q160-530.77 160-480t36.15 86.92q36.16 36.16 86.93 36.16h141.54v40ZM340-460v-40h280v40H340Zm195.38 143.08v-40h141.54q50.77 0 86.93-36.16Q800-429.23 800-480t-36.15-86.92q-36.16-36.16-86.93-36.16H535.38v-40h141.54q67.68 0 115.38 47.69Q840-547.7 840-480.04t-47.7 115.39q-47.7 47.73-115.38 47.73H535.38Z"/></svg>
            </button>
          </div>
          <div>
            <button onClick={() => { setOnQr(true); settingOptions()}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M659.76-132q-36.76 0-62.26-25.67Q572-183.33 572-220q0-6 6-31L288-424q-12 15-30.14 23.5Q239.73-392 219-392q-36.25 0-61.62-26Q132-444 132-480t25.38-62q25.37-26 61.62-26 20.73 0 38.86 8.5Q276-551 288-536l290-172q-3-8-4.5-16t-1.5-16q0-36.67 25.74-62.33Q623.47-828 660.24-828q36.76 0 62.26 25.74 25.5 25.73 25.5 62.5 0 36.76-25.67 62.26Q696.67-652 660-652q-21 0-38.5-9T592-685L302-512q3 8 4.5 16t1.5 16q0 8-1.5 16t-4.5 16l290 173q12-15 29.5-24t38.5-9q36.67 0 62.33 25.74Q748-256.53 748-219.76q0 36.76-25.74 62.26-25.73 25.5-62.5 25.5Zm.24-28q25.5 0 42.75-17.25T720-220q0-25.5-17.25-42.75T660-280q-25.5 0-42.75 17.25T600-220q0 25.5 17.25 42.75T660-160ZM219-420q25.93 0 43.46-17.25Q280-454.5 280-480t-17.54-42.75Q244.93-540 219-540q-25.07 0-42.04 17.25Q160-505.5 160-480t16.96 42.75Q193.93-420 219-420Zm441-260q25.5 0 42.75-17.25T720-740q0-25.5-17.25-42.75T660-800q-25.5 0-42.75 17.25T600-740q0 25.5 17.25 42.75T660-680Zm0 460ZM220-480Zm440-260Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-678.46V-840h161.54v40H160v121.54h-40ZM120-120v-161.54h40V-160h121.54v40H120Zm558.46 0v-40H800v-121.54h40V-120H678.46ZM800-678.46V-800H678.46v-40H840v161.54h-40ZM677.69-282.31h48.46v48.46h-48.46v-48.46Zm0-96.92h48.46v48.46h-48.46v-48.46Zm-48.46 48.46h48.46v48.46h-48.46v-48.46Zm-48.46 48.46h48.46v48.46h-48.46v-48.46Zm-48.46-48.46h48.46v48.46h-48.46v-48.46Zm96.92-96.92h48.46v48.46h-48.46v-48.46Zm-48.46 48.46h48.46v48.46h-48.46v-48.46Zm-48.46-48.46h48.46v48.46h-48.46v-48.46Zm193.84-298.46v193.84H532.31v-193.84h193.84ZM427.69-427.69v193.84H233.85v-193.84h193.84Zm0-298.46v193.84H233.85v-193.84h193.84Zm-35.38 456.92v-123.08H269.23v123.08h123.08Zm0-298.46v-123.08H269.23v123.08h123.08Zm298.46 0v-123.08H567.69v123.08h123.08Z"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Settings;
