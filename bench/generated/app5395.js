  import { h, Component, render } from './preact.js?n=5395';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5395!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  