  import { h, Component, render } from './preact.js?n=4576';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4576!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  