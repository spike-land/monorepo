  import { h, Component, render } from './preact.js?n=6190';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6190!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  