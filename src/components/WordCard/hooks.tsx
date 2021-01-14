import { useState, useLayoutEffect } from 'react'

import { TWord } from '../../data/words'

export const useWordCardButtons = (currentWord: TWord) => {
  const [isTranslationShowed, setTranslationShowed] = useState(false)
  useLayoutEffect(() => {
    setTranslationShowed(false)
  }, [currentWord])

  return {
    isTranslationShowed,
    setTranslationShowed,
  }
}
