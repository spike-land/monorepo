  import { h, Component, render } from './preact.js?n=4811';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4811!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  