  import { h, Component, render } from './preact.js?n=3840';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3840!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  