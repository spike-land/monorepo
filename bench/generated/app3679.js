  import { h, Component, render } from './preact.js?n=3679';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3679!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  