const programas=[
    {id:"1", name:"laura Lopardo", description:"" ,img:"../public/images/lauralopardo.jpg"},
    {id:"2", name:"jony civale",  description:"",img:"../public/images/jonycivale.jpg"},
    {id:"3", name:"brian valerio",  description:"",img:"../public/images/biranvalerio.jpg"},
    {id:"4", name:"maxi caputo", hora:"15:00 a 17:00",img:"../public/images/Max.jpeg"},
]

export const getPrograms =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(programas)
        },2000)
    })

    
}
export default programas;

