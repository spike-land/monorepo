  import { h, Component, render } from './preact.js?n=4559';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4559!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  