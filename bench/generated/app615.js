  import { h, Component, render } from './preact.js?n=615';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 615!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  