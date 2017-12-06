import React, {Component}  from 'react'
import {Link} from 'react-router'
import MarkdownEditor from './markdownEditor'

export default class LandingPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Link to={`/to-do`}>To-do List</Link>
        <MarkdownEditor />
      </div>
    )
  }
}
