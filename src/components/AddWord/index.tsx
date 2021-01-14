import React, { useEffect, useState } from 'react'
// import PropTypes from "prop-types";
import { Formik } from 'formik'

// import { useAppState } from "./AppStateContext"

import { db } from '../../config/firebase'

function AddWord() {
  const [words, setWords] = useState([])
  useEffect(() => {
    try {
      db.ref('/db').on('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {}
        console.log(data)
        setWords({ ...data })
      })
    } catch (e) {
      console.log(e)
    }
  }, [])

  const saveWord = async (word: string) => {
    const translation = 'asd'
    return await db.ref('/db').push({ word, translation })
  }

  const deleteWord = async (key: string) => {
    return await db.ref('/db').child(key).remove()
  }

  return (
    <>
      <Formik
        initialValues={{ word: 'jared' }}
        onSubmit={async ({ word }, actions) => {
          const res = await saveWord(word)
          console.log(res)
          actions.setSubmitting(false)
        }}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="next-btn-wrapper d-flex justify-content-center"
          >
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.word}
              name="word"
            />
            {props.errors.word && <div id="feedback">{props.errors.word}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <ul>
        {Object.values(words).length &&
          Object.entries(words).map((entry, key) => {
            const id = entry[0]
            const { word, translation } = entry[1]
            return (
              <li key={key}>
                <span style={{ width: '200px' }}>
                  {word} - {translation}{' '}
                </span>
                <button onClick={() => deleteWord(id)}>x</button>
              </li>
            )
          })}
      </ul>
    </>
  )
}

AddWord.propTypes = {}

export default AddWord
