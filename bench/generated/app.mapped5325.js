  import { h, Component, render } from 'lib/preact.js?n=5325';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5325!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  