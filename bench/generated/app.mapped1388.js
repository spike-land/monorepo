  import { h, Component, render } from 'lib/preact.js?n=1388';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1388!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  