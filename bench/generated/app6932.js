  import { h, Component, render } from './preact.js?n=6932';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6932!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  