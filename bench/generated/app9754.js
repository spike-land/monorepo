  import { h, Component, render } from './preact.js?n=9754';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9754!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  