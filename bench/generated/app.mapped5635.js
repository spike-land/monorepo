  import { h, Component, render } from 'lib/preact.js?n=5635';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5635!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  