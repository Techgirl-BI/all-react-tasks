import data from './data.json'
import React from 'react'
import './babyNames.css'

function MainApp() {
  return (
   <div className='main-container'>
   <div className='names-displayed'>
    {data.map((names) => {
         const styles = {
            backgroundColor: names.sex === 'f'? "pink" : 'dodgerblue',
            border: 'none',
            
        }
    return <span key={names.id} style={styles}> {names.name} </span>})}
   </div>
   </div>
    
  )
}

export default MainApp