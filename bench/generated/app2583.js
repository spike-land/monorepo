  import { h, Component, render } from './preact.js?n=2583';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2583!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  