  import { h, Component, render } from 'lib/preact.js?n=7616';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7616!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  