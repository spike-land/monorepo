  import { h, Component, render } from 'lib/preact.js?n=1651';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1651!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  