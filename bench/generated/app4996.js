  import { h, Component, render } from './preact.js?n=4996';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4996!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  