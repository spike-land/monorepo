  import { h, Component, render } from './preact.js?n=3710';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3710!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  