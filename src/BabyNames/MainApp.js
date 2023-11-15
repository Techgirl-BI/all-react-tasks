import babydata from './data.json'
import {useState} from 'react'
import './babyNames.css'

function MainApp() {
    const [data, setData] = useState(babydata)
    const [searchTerm, setSearchTerm] = useState("")
    const handleFilter = (e) => {
        setSearchTerm(e.target.value)
        const newdata = data.filter((names) => names.includes(searchTerm))
        setData(newdata)
    }
  return (
   <div className='main-container'>
    <input onChange={()=>handleFilter()} type='search' placeholder='Search for a name...' value={searchTerm}/>
   <div className='names-displayed'>
    {data.sort((a,b) => a.name.localeCompare(b.name)).map((names) => {
         const styles = {
            backgroundColor: names.sex === 'f'? "pink" : 'dodgerblue'
        }
    return <p key={names.id} style={styles}> {names.name} </p>})}
   </div>
   </div>
  )
}

export default MainApp