  import { h, Component, render } from './preact.js?n=9590';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9590!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  