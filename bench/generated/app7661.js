  import { h, Component, render } from './preact.js?n=7661';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7661!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  