  import { h, Component, render } from 'lib/preact.js?n=1884';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1884!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  