  import { h, Component, render } from './preact.js?n=2766';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2766!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  