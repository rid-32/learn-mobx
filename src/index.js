import React, { Component } from 'react';
import { render } from 'react-dom';
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

class appState {
  @observable count = 0

  increment = () => this.count++

  decrement = () => this.count--
}

@observer
class Count extends Component {
  handleInc = () => this.props.store.increment()

  handleDec = () => this.props.store.decrement()

  render() {
    const { count } = this.props.store

    return (
      <div>
        <DevTools />
        Counter: {count}<br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
}

render(<Count store={new appState()} />, document.getElementById('app'));
registerServiceWorker();
