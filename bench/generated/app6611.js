  import { h, Component, render } from './preact.js?n=6611';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6611!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  