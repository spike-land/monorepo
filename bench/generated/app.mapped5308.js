  import { h, Component, render } from 'lib/preact.js?n=5308';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5308!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  