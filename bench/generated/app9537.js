  import { h, Component, render } from './preact.js?n=9537';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9537!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  