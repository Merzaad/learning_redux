/* eslint-disable import/no-unresolved */
import React from 'react'
import './calculator.css'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

function CalculatorSetting() {
  return (
    <div className="calculatorSetting">
      <div>
        <ToggleButtonGroup onChange={() => console.log('test')}>
          <ToggleButton value="Primary">Primary</ToggleButton>
          <ToggleButton value="Secondary">Secondary</ToggleButton>
          <ToggleButton value="Success">Success</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}

export default CalculatorSetting
