  import { h, Component, render } from './preact.js?n=3485';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3485!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  