  import { h, Component, render } from 'lib/preact.js?n=1031';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1031!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  