  import { h, Component, render } from './preact.js?n=6377';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6377!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  