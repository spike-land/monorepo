  import { h, Component, render } from './preact.js?n=1983';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1983!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  