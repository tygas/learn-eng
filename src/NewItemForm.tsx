import React, { useState } from 'react'
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles'
import { AddNewItemProps } from './AddNewItem'

interface NewItemFormProps {
  onAdd(text: string): void
}

function NewItemForm(props: AddNewItemProps) {
  const [text, setText] = useState('')
  const { onAdd } = props
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e: React.ChangeEvent<any>) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}> Create</NewItemButton>
    </NewItemFormContainer>
  )
}
