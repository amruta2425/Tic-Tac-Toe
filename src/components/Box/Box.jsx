import React from 'react'
import './Box.css'

const Box = ({value,onClick}) => {
    const styles = value === "x" ?"box x": "box o"
  return (
    <button className ={styles} onClick = {onClick}>{value}</button>
  )
}

export default Box