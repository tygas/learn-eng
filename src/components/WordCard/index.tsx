import React from 'react'

import { ListItem } from '../ListItem'
import { ListItemWithBtn } from '../ListItemWithBtn'
import { showTranslationBtn, firstListItemClassName } from '../../config'
import { useWordCardButtons } from './hooks'
import { TWord } from '../../data'

export type TProps = {
  currentWord: TWord
}

export const WordCard = ({ currentWord }: TProps) => {
  const { word, translation } = currentWord

  const { isTranslationShowed, setTranslationShowed } = useWordCardButtons(
    currentWord,
  )

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <ListItem value={word} className={firstListItemClassName} />

        <ListItemWithBtn
          value={translation}
          isOpen={isTranslationShowed}
          onClick={() => setTranslationShowed(true)}
          btnValue={showTranslationBtn}
        />
      </ul>
    </div>
  )
}
