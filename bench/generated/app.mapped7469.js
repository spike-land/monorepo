  import { h, Component, render } from 'lib/preact.js?n=7469';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7469!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  