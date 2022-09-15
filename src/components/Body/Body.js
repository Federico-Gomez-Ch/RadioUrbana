import {useState} from 'react'
import Person from '../Person/Person'
import './Body.css'

const Body = () => {
    const [persons] = useState([
      {id:"1", name:"Jony Civale",  hora:"13:00 a 15:00" ,img:"../images/jonycivale.jpg"},
      {id:"2", name:"Maxi Caputo", hora:"15:00 a 17:00" ,img:"../images/Max.jpeg"},
      {id:"3", name:"Brian Valerio",  hora:"17:00 a 19:00" ,img:"../images/biranvalerio.jpg"},
      {id:"4", name:"Laura Lopardo", hora:"19:00 a 21:00" ,img:"../images/lauralopardo.jpg"},
    ])
    return (
        <div className='Body'>
          {persons.map(person => {
            return(
          <Person key={person.id} 
          name={person.name}
          img={person.img}
          hora={person.hora}/>
          )})}
        </div>


    )
}


export default Body 
