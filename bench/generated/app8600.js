  import { h, Component, render } from './preact.js?n=8600';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8600!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  