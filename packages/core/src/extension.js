import React from 'react'
import classNames from 'classnames'
import {
  TextInput,
  Form,
  FormGroup,
  SelectItem,
  Select,
  TextArea,
  Button,
} from 'carbon-components-react'
import { Tile } from 'carbon-components-react/lib'

import './styles/extension.scss'

const Extension = props => {
  return (
    // Start with the wrapper component (Tabs)
    <Tile>
      <div>SpoTubefy</div>
      <Form>
        <FormGroup legendText="text-2">
          <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="test2"
            invalidText="Invalid error message."
            labelText="Text Input label"
            placeholder="Placeholder text"
          />
        </FormGroup>
        <FormGroup legendText="Text">
          <TextArea
            cols={50}
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="test5"
            invalidText="Invalid error message."
            labelText="Text Area label"
            placeholder="Placeholder text"
            rows={4}
          />
        </FormGroup>
        <FormGroup legendText="select">
          <Select
            defaultValue="placeholder-item"
            id="select-1"
            invalidText="This is an invalid error message."
            labelText="Select"
          >
            <SelectItem text="Option 1" value="option-1" />
            <SelectItem text="Option 2" value="option-2" />
            <SelectItem text="Option 3" value="option-3" />
          </Select>
        </FormGroup>
        <Button kind="primary" tabIndex={0} type="submit">
          Submit
        </Button>
      </Form>
    </Tile>
  )
}

export default Extension
