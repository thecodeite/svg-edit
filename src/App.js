import React, { Component } from 'react';
import './App.css';

import {defaultSvg} from './defaultSvg'

class App extends Component {
  constructor () {
    super()
    this.state=this.load()
  }

  load () {
    const name = window.location.hash.substr(1) || 'default'
    const fromLocalStorage = window.localStorage.getItem('svg-editor-' + name)
    const names = [...window.localStorage]
      .map((_, i) => localStorage.key(i))
      .filter(n => n.startsWith('svg-editor-'))
      .map(n => n.substr('svg-editor-'.length))

    return {
      text: fromLocalStorage || defaultSvg,
      name,
      names
    }
  }

  componentDidMount () {
    window.addEventListener('hashchange', e => {
      console.log('hashchange')
      this.setState(this.load())
    })
  }

  delete (name) {
    window.localStorage.removeItem('svg-editor-' + name)
    this.setState(this.load())
  }

  render() {
    const {text, name, names} = this.state
    const onChange = e => {
      window.localStorage.setItem('svg-editor-' + name, e.target.value)
      this.setState(this.load())
    }
    return (
      <div className="App">
        <div className="Editor" >
          <div>
            {names.map(n => <span key={n}>[<a href={`#${n}`}>{n}</a>{' '}<button onClick={() => this.delete(n)} ><span role="img" aria-label={`delete ${name}`}>❌</span></button>]{' '}</span>)}
          </div>
          <h1>{name}</h1>
          <textarea value={text} onChange={onChange} />
        </div>

        <div className="Preview" dangerouslySetInnerHTML={{__html:text}} />
      </div>
    );
  }
}

export default App;
