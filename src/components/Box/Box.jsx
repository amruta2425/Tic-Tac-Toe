import React from 'react'
import './Box.css'

const Box = ({value,onClick}) => {
    const styles = value === "X" ?"box X": "box O"
  return (
    <button className ={styles} onClick = {onClick}>{value}</button>
  )
}

export default Box