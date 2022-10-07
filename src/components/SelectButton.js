import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
    onClick = {onClick}
      style={{
        border: "1px solid gold",
        borderRadius: "5px",
        padding: "10px",
        padddingLeft: "20px",
        paddingRight: "20px",
        fontFamily: "Montserrat",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "gold",
          color: "black",
        },
        width: "22%",
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}>{children}</span>
  )
}

export default  SelectButton 