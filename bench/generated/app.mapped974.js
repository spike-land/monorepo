  import { h, Component, render } from 'lib/preact.js?n=974';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 974!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  