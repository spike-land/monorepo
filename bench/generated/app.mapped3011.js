  import { h, Component, render } from 'lib/preact.js?n=3011';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3011!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  