  import { h, Component, render } from './preact.js?n=1426';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1426!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  