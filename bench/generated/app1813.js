  import { h, Component, render } from './preact.js?n=1813';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1813!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  