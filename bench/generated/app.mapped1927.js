  import { h, Component, render } from 'lib/preact.js?n=1927';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1927!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  