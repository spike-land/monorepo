  import { h, Component, render } from './preact.js?n=5764';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5764!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  