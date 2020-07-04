import React from 'react'
import classNames from 'classnames'
import {
  Accordion,
  AccordionItem,
  ModalWrapper,
  Tabs,
  Tab,
  CodeSnippet,
  TextInput,
} from 'carbon-components-react'
import { Tile } from 'carbon-components-react/lib'

import './styles/extension.scss'

const Extension = props => {
  return (
    // Start with the wrapper component (Tabs)
    <div style={{ width: '50%' }}>
      <Tabs type="container">
        <Tab href="#" id="tab-1" label="Tab label 1">
          <div className="some-content">Content for first tab goes here.</div>
        </Tab>
        <Tab href="#" id="tab-2" label="Tab label 2">
          <div className="some-content">Content for second tab goes here.</div>
        </Tab>
        <Tab href="#" id="tab-3" label="Tab label 3">
          <div className="some-content">Content for third tab goes here.</div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Extension
