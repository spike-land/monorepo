  import { h, Component, render } from 'lib/preact.js?n=9414';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9414!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  