  import { h, Component, render } from 'lib/preact.js?n=8926';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8926!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  