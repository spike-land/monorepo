  import { h, Component, render } from './preact.js?n=2180';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2180!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  