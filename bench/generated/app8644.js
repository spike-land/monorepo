  import { h, Component, render } from './preact.js?n=8644';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8644!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  