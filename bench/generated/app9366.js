  import { h, Component, render } from './preact.js?n=9366';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9366!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  