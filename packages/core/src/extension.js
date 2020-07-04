import React from 'react'
import classNames from 'classnames'
import {
  TextInput,
  Form,
  FormGroup,
  Slider,
  Button,
  Toggle,
  ComboBox,
} from 'carbon-components-react'
import { Tile } from 'carbon-components-react/lib'

import './styles/extension.scss'
const helperText = 'To get started, please provide a valid YouTube playlist URI'

const saveToYouTube = () => {
  console.log('Saving playlist to your YouTube account...')
}

const noop = evt => {
  evt.preventDefault()
}

const Extension = props => {
  return (
    // Start with the wrapper component (Tabs)
    <Tile className="stbfy--popup__tile">
      <header className="header">
        <div className="header__title">
          Spo<span className="tube">Tube</span>fy
        </div>
        <p className="header__meta">{helperText}</p>
      </header>
      <Form onSubmit={noop}>
        <FormGroup legendText="">
          <TextInput
            id="test2"
            invalidText="Invalid error message."
            labelText="YouTube Playlist URI"
            placeholder="Enter playlist URI...."
          />
        </FormGroup>

        <FormGroup legendText="">
          <TextInput
            id="test2"
            invalidText="Invalid error message."
            labelText="Spotify Playlist Name"
            placeholder="New Playlist Title..."
          />
        </FormGroup>

        {/*<FormGroup legendText="">*/}
        {/*  <ComboBox*/}
        {/*    ariaLabel="Choose an item"*/}
        {/*    direction="bottom"*/}
        {/*    disabled={false}*/}
        {/*    helperText="Optional helper text here"*/}
        {/*    id="carbon-combobox-example"*/}
        {/*    invalidText="A valid value is required"*/}
        {/*    itemToElement={null}*/}
        {/*    itemToString={function noRefCheck() {}}*/}
        {/*    items={[*/}
        {/*      {*/}
        {/*        id: 'option-0',*/}
        {/*        text:*/}
        {/*          'An example option that is really long to show what should be done to handle long text',*/}
        {/*      },*/}
        {/*      {*/}
        {/*        id: 'option-1',*/}
        {/*        text: 'Option 1',*/}
        {/*      },*/}
        {/*      {*/}
        {/*        id: 'option-2',*/}
        {/*        text: 'Option 2',*/}
        {/*      },*/}
        {/*      {*/}
        {/*        id: 'option-3',*/}
        {/*        selected: true,*/}
        {/*        text: 'Option 3',*/}
        {/*      },*/}
        {/*      {*/}
        {/*        id: 'option-4',*/}
        {/*        text: 'Option 4',*/}
        {/*      },*/}
        {/*      {*/}
        {/*        id: 'option-5',*/}
        {/*        text: 'Option 5',*/}
        {/*      },*/}
        {/*    ]}*/}
        {/*    light={false}*/}
        {/*    onChange={function noRefCheck() {}}*/}
        {/*    placeholder="Filter..."*/}
        {/*    shouldFilterItem={function noRefCheck() {}}*/}
        {/*    size={undefined}*/}
        {/*    titleText="Combobox title"*/}
        {/*    type="default"*/}
        {/*  />*/}
        {/*</FormGroup>*/}

        {/*<FormGroup legendText="">*/}
        {/*  <Slider*/}
        {/*    ariaLabelInput="Label for slider value"*/}
        {/*    disabled={false}*/}
        {/*    hideTextInput={true}*/}
        {/*    id="slider"*/}
        {/*    inputType="number"*/}
        {/*    labelText="Covariance"*/}
        {/*    light={false}*/}
        {/*    max={100}*/}
        {/*    maxLabel=""*/}
        {/*    min={0}*/}
        {/*    minLabel=""*/}
        {/*    name=""*/}
        {/*    onChange={function noRefCheck() {}}*/}
        {/*    onRelease={function noRefCheck() {}}*/}
        {/*    step={1}*/}
        {/*    stepMultiplier={5}*/}
        {/*    value={50}*/}
        {/*  />*/}
        {/*</FormGroup>*/}
        <FormGroup legendText="">
          <Toggle
            aria-label="toggle button"
            id="toggle-1"
            labelText="Save to YouTube"
            labelA="No"
            labelB="Yes"
            disabled
            onToggle={saveToYouTube}
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
