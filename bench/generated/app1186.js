  import { h, Component, render } from './preact.js?n=1186';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1186!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  