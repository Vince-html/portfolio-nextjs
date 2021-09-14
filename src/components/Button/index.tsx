import React from 'react'
import { Btn } from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{children}</Btn>
}

export default Button
