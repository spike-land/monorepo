  import { h, Component, render } from './preact.js?n=4207';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4207!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  