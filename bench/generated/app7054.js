  import { h, Component, render } from './preact.js?n=7054';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7054!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  