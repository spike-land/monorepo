  import { h, Component, render } from 'lib/preact.js?n=3817';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3817!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  