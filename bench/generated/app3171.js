  import { h, Component, render } from './preact.js?n=3171';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3171!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  