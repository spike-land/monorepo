  import { h, Component, render } from './preact.js?n=4208';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4208!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  