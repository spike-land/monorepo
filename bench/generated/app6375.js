  import { h, Component, render } from './preact.js?n=6375';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6375!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  