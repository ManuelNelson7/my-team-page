import { Component } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'
import Attribution from './components/Attribution'

class App extends Component {
  state = {
    people: [
      {name: 'Bill Mahoney', job:'Product owner', img:'../../public/img/photo1.png'},
      {name: 'Saba Cabrera', job:'Art director', img:'../../public/img2.png'},

    ]
  }
  
  render() {
    return (
      <div>

        <Header />

        <Grid />

        <Attribution />

      </div>
    )
  }
}


export default App;
