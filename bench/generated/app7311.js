  import { h, Component, render } from './preact.js?n=7311';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7311!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  