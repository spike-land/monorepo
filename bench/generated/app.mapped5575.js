  import { h, Component, render } from 'lib/preact.js?n=5575';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5575!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  