  import { h, Component, render } from './preact.js?n=5101';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5101!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  