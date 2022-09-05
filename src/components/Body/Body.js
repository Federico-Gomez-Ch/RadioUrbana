import {useState} from 'react'
import Person from '../Person/Person'
import './Body.css'

const Body = () => {
    const [persons] = useState([
      {id:"1", name:"jony civale",  hora:"",img:"../images/jonycivale.jpg"},
      {id:"2", name:"maxi caputo", hora:"15:00 a 17:00",img:"../images/Max.jpeg"},
      {id:"3", name:"brian valerio",  hora:"",img:"../images/biranvalerio.jpg"},
      {id:"4", name:"laura Lopardo", hora:"" ,img:"../images/lauralopardo.jpg"},
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
