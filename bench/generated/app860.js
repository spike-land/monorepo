  import { h, Component, render } from './preact.js?n=860';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 860!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  