import React from 'react'

const InfoAlert = ({ message }) => {
  const infoStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if (message === null || message === '') {
    return null
  }

  return (
    <div className="info" style={infoStyle}>
      {message}
    </div>
  )
}

export default InfoAlert