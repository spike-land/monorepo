  import { h, Component, render } from './preact.js?n=2574';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2574!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  