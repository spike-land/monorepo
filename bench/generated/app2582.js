  import { h, Component, render } from './preact.js?n=2582';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2582!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  