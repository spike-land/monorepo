  import { h, Component, render } from './preact.js?n=3341';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3341!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  