import React, { useState, useEffect } from 'react'

import { Btn } from '../Btn'

import './ThemeSwitcher.css'

const darkThemeCss = `
  html {
    background-color: #fefefe;
    filter: invert(90%);
  }
  * {
    background-color: inherit;
  }
`
export const ThemeSwitcher = () => {
  const [isDarkTheme, toggleTheme] = useState(false)
  useEffect(() => {
    const savedTheme = localStorage.getItem('learn-hebrew-theme')
    if(savedTheme === 'dark') toggleTheme(true)
  }, [])
  return (
    <div className='theme-switcher-wrapper'>
      <Btn 
        onClick={() => {
          const themeToSave = isDarkTheme ? 'light' : 'dark'
          localStorage.setItem('learn-hebrew-theme', themeToSave)
          toggleTheme(!isDarkTheme)
        }}
        className='btn btn-dark theme-switcher-btn'
        value={isDarkTheme ? 'day' : 'night'}
      />
      {isDarkTheme && <style media='screen'>
        {darkThemeCss}
      </style>}
    </div>
  )
}
