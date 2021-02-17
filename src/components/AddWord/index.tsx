import React, { useEffect, useState } from 'react'
// import PropTypes from "prop-types";
import { Formik } from 'formik'
import './word.scss'
import tr from '../translate'
import { db } from '../../config/firebase'
import { AddNewItem } from '../../AddNewItem'

function AddWord() {
  const [words, setWords] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    try {
      db.ref('/db').on('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {}

        setWords({ ...data })
      })
    } catch (e) {
      console.log(e)
    }
  }, [])

  const saveWord = async (word: string) => {
    const translation = await tr(word)

    return db.ref('/db').push({ word, translation: translation.toString() })
  }

  const deleteWord = async (key: string) => {
    return await db.ref('/db').child(key).remove()
  }
  const onTranslationChange = (row: any, id: string) => {
    return db.ref('db/' + id).set(row)
  }

  return (
    <>
      <Formik
        initialValues={{ word: 'one' }}
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
        {!!Object.values(words).length ? (
          Object.entries(words).map((entry, key) => {
            const id = entry[0]
            const { word, translation } = entry[1]
            return (
              <li key={key}>
                <span style={{ width: '200px' }}>
                  {word} -{' '}
                  <span
                    className="editable"
                    contentEditable={true}
                    onClick={() => setShowForm(true)}
                    onBlur={(e) =>
                      onTranslationChange(
                        {
                          word,
                          translation: e.target.innerText,
                        },
                        id,
                      )
                    }
                  >
                    {translation || '???'}
                  </span>
                </span>
                <AddNewItem
                  toggleButtonText="+"
                  onAdd={(e) => console.log(e)}
                  dark
                />
                <button onClick={() => deleteWord(id)}>x</button>
              </li>
            )
          })
        ) : (
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        )}
      </ul>
    </>
  )
}

AddWord.propTypes = {}

export default AddWord
