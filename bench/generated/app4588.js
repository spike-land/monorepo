  import { h, Component, render } from './preact.js?n=4588';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4588!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  