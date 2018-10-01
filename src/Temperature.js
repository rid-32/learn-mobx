import React, { Component } from 'react'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from "mobx-react-devtools";

export class TemperatureStore {
  @observable unit = 'C'

  @observable temperatureCelsius = 25

  @computed get temperatureKelvin() {
    console.log('calculating Kelvin')
    return this.temperatureCelsius * (9/5) + 32
  }

  @computed get temperatureFahrenheit() {
    console.log('calculating Fahrenheit')
    return this.temperatureCelsius + 273.15
  }

  @computed get temperature() {
    console.log('calculating temperature')
    switch(this.unit) {
      case 'K': return this.temperatureKelvin + ' K'
      case 'F': return this.temperatureFahrenheit + ' F'
      case 'C': return this.temperatureCelsius + ' C'
    }
  }

  @action setUnit(unit) {
    this.unit = unit
  }
}

@observer
class App extends Component {
  render() {
    const { temperatures } = this.props

    return (
      <div>
        {temperature.temperature}
        <DevTools />
      </div>
    )
  }
}

export default App
