  import { h, Component, render } from 'lib/preact.js?n=1161';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1161!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  