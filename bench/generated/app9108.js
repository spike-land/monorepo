  import { h, Component, render } from './preact.js?n=9108';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9108!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  