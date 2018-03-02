import React, { Component } from 'react';
import './App.css';

const defaultSvg = ((w, h, r, l) => <svg width="500px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<path stroke="black" strokeWidth={l} fill="transparent" d={`
  M ${(l/2) + r} ${l/2}
  l ${(w)-(r*2)-l} 0 a ${r} ${r} 90 0 1 ${r} ${r}
  l 0 ${(h)-(r*2)-l} a ${-r} ${r} 90 0 1 ${-r} ${r}
  l ${-(w)+(r*2)+l} 0 a ${-r} ${-r} 90 0 1 ${-r} ${-r}
  l 0 ${-(h)+(r*2)+l} a ${r} ${-r} 90 0 1 ${r} ${-r}
  z
`}></path>
</svg>)(100, 100, 5, 5)

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: defaultSvg
    }
  }

  render() {
    const {text} = this.state
    const onChange = e => this.setState({text: e.target.value})
    return (
      <div className="App">
        <div className="Editor" >
          <textarea value={text} onChange={onChange} />
        </div>

        <div className="Preview" >
          {/* <div dangerouslySetInnerHTML={{__html:text}} /> */}
          {defaultSvg}
        </div>
      </div>
    );
  }
}

export default App;
