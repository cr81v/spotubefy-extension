import React from 'react'
import classNames from 'classnames'
import {
  TextInput,
  Form,
  FormGroup,
  SelectItem,
  Slider,
  Select,
  TextArea,
  Button,
  Toggle,
} from 'carbon-components-react'
import { Tile } from 'carbon-components-react/lib'

import './styles/extension.scss'
const helperText = 'To get started, please provide a valid YouTube playlist URI'

const saveToYouTube = () => {
  console.log('Saving playlist to your YouTube account...')
}

const Extension = props => {
  return (
    // Start with the wrapper component (Tabs)
    <Tile className="stbfy--popup__title">
      <div className="title">SpoTubefy</div>
      <Form>
        <FormGroup legendText="">
          <TextInput
            helperText={helperText}
            id="test2"
            invalidText="Invalid error message."
            labelText="Playlist URI"
            placeholder="Enter playlist URI...."
          />
        </FormGroup>
        <FormGroup legendText="">
          <Toggle
            size="small"
            aria-label="toggle button"
            id="toggle-1"
            labelText="Save to YouTube"
            labelA="No"
            labelB="Yes"
            onToggle={saveToYouTube}
          />
        </FormGroup>
        <FormGroup legendText="">
          <Select
            defaultValue="placeholder-item"
            id="select-1"
            invalidText="This is an invalid error message."
            labelText="Choose Playlist"
          >
            <SelectItem text="Playlist #1" value="option-1" />
            <SelectItem text="Playlist #3" value="option-2" />
            <SelectItem text="Playlist #5" value="option-3" />
          </Select>
        </FormGroup>
        <FormGroup legendText="">
          <Slider
            ariaLabelInput="Label for slider value"
            disabled={false}
            hideTextInput={false}
            id="slider"
            inputType="number"
            labelText="Covariance"
            light={false}
            max={100}
            maxLabel=""
            min={0}
            minLabel=""
            name=""
            onChange={function noRefCheck() {}}
            onRelease={function noRefCheck() {}}
            step={1}
            stepMultiplier={5}
            value={50}
          />
        </FormGroup>
        <Button kind="primary" tabIndex={0} type="submit">
          Submit
        </Button>
      </Form>
    </Tile>
  )
}

export default Extension
