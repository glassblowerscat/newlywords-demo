import React from "react"
import styles from "./Button.module.css"

interface ButtonProps {
  className?: string
  onClick: (event: React.SyntheticEvent) => void
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  const buttonClassName = `${styles.button}${className ? ` ${className}` : ""}`
  return (
    <div className={buttonClassName} onClick={onClick}>
      {children}
    </div>
  )
}
