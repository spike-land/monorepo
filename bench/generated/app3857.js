  import { h, Component, render } from './preact.js?n=3857';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3857!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  