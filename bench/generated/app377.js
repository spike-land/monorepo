  import { h, Component, render } from './preact.js?n=377';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 377!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  