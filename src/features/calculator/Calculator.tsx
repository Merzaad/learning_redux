import React from 'react'
import { useAppSelector } from "../../app/hooks"
import { selectValue } from "./calculatorSlice"
export const Calculator = () => {
  const test = useAppSelector(selectValue)
  return ( 
    <div>{test}</div>
    )
}
