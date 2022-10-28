import {Component, h} from '@stencil/core';

@Component({
  tag: 'stenciljs-button',
  styleUrl: 'stenciljs-button.scss',
  shadow: true,
})
export class StenciljsButton {

  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }

}
