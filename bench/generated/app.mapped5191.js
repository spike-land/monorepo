  import { h, Component, render } from 'lib/preact.js?n=5191';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5191!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  