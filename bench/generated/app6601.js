  import { h, Component, render } from './preact.js?n=6601';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6601!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  