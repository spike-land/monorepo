  import { h, Component, render } from 'lib/preact.js?n=9061';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9061!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  