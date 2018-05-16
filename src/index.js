import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAUNRbvz3pbKA8sBRoL_67mSAA2u_ySxnQ'




 // Create component, then show on DOM

 // below is a component class instantiate by doing <App />
 class App extends Component {
    constructor(props) {
        super(props)
        this.state = { videos:[] }
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({videos})
            console.log(this.state)
        })
    }

    render() {
         return (
        <div> 
            <SearchBar /> 
        </div>
        )
    }
 }


 ReactDOM.render(<App />, document.querySelector('.container'))