  import { h, Component, render } from './preact.js?n=5680';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5680!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  