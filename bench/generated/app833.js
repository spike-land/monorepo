  import { h, Component, render } from './preact.js?n=833';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 833!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  