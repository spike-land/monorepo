  import { h, Component, render } from './preact.js?n=6257';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6257!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  