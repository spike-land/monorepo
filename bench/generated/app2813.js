  import { h, Component, render } from './preact.js?n=2813';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2813!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  