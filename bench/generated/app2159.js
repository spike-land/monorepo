  import { h, Component, render } from './preact.js?n=2159';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2159!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  