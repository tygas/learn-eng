import { db } from '../config/firebase'

export type TWordUnmapped = {
  word: string
  translation: string
}

export type TWord = TWordUnmapped & {
  id: number
}

export const wordsClass51 = async () =>
  db.ref('/db').on('value', (querySnapShot) => {
    let data = querySnapShot.val() ? querySnapShot.val() : {}
    return data
  })

export const wordsClass5 = [
  {
    word: 'necromaniac',
    translation: 'Dwels about death',
  },
]
