  import { h, Component, render } from './preact.js?n=1910';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1910!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  