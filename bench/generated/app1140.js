  import { h, Component, render } from './preact.js?n=1140';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1140!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  