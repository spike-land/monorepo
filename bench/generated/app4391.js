  import { h, Component, render } from './preact.js?n=4391';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4391!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  