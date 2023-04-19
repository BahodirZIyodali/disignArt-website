import React from 'react'

const Button = ({link,text}) => {
  return (
      <a href={link}  className='btn mt-5'>{text}</a>
    )
}

export default Button