  import { h, Component, render } from 'lib/preact.js?n=3731';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3731!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  