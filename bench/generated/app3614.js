  import { h, Component, render } from './preact.js?n=3614';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3614!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  