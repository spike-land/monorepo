  import { h, Component, render } from './preact.js?n=4892';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4892!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  