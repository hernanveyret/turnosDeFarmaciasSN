import React from 'react';
import './almanacDay.css';

const AlmanacDay = ({day,month,monthString,dayString,year,handlePrev,handleNext, handleChangeDayStringNext,handleChangeDayStringPrev,cardHeaderRef}) => {
 
  return (
    <div className="containerAlmanac">
      <div className="cardAlmanac">
        <div className="monthInfo" ref={cardHeaderRef}>
        { month === 0 ? <button className="btn-mes btn-prev" onClick={handlePrev} style={{display:"none"}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button> : <button className="btn-mes btn-prev" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button> 
        }
          <h3>{monthString}</h3>
          <p>{year}</p>
        { month === 11 ? <button className="btn-mes btn-next" onClick={handleNext} style={{display:"none"}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </button> : <button className="btn-mes btn-next" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </button> 
        }
        </div>
        <div className="dayInfo">
          <p>{dayString[0].toUpperCase() + dayString.slice(1)}</p>
          <p>{day}</p>
          <button className="btn-day-left" onClick={handleChangeDayStringPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          </button>
          <button className="btn-day-rigth" onClick={handleChangeDayStringNext}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
          </button>  
        </div>
      </div>
      <div className="msj-hs">
        
          <p>De 00hs a 8:30hs</p>
          <p>Ver día anterior</p> */
        
      </div>
    </div>
  )
}
export default AlmanacDay;