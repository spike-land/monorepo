  import { h, Component, render } from 'lib/preact.js?n=4271';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4271!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  