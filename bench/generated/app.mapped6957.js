  import { h, Component, render } from 'lib/preact.js?n=6957';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6957!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  