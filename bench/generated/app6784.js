  import { h, Component, render } from './preact.js?n=6784';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6784!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  