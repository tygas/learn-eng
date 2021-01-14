import React, { Fragment } from 'react'

import { getCaption } from '../../utils'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { ClassSwitcherBtn } from '../ClassSwitcherBtn'
import { useAppContext } from '../../reducer'

export const Header = () => {
  const { 
    state: { 
      words, 
      classWords,
      currentWords,
    },
  } = useAppContext()
  const length = words.length
  const passedLength = length - currentWords.length
  return (
  <Fragment>
    <ThemeSwitcher />
    <ClassSwitcherBtn defaultValue={classWords} />
    <h1 className='text-center'>Word?</h1>
    <p className='text-center'>
      {`${passedLength} ${getCaption(passedLength)} from ${length}`}
    </p>
  </Fragment>
)}
