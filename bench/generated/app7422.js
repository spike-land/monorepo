  import { h, Component, render } from './preact.js?n=7422';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7422!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  