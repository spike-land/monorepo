  import { h, Component, render } from './preact.js?n=6388';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6388!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  