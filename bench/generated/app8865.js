  import { h, Component, render } from './preact.js?n=8865';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8865!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  