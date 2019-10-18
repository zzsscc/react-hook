import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '~/src/views'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    )
  }
}
