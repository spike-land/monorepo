  import { h, Component, render } from './preact.js?n=4057';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4057!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  