  import { h, Component, render } from './preact.js?n=2923';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2923!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  