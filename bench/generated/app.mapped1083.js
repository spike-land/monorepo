  import { h, Component, render } from 'lib/preact.js?n=1083';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1083!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  