  import { h, Component, render } from 'lib/preact.js?n=4786';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4786!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  