  import { h, Component, render } from './preact.js?n=2055';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2055!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  