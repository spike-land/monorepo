  import { h, Component, render } from './preact.js?n=1131';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1131!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  