import { registerSubclass } from "./Element";
import { reflectProperties } from "./enhanceElement";
import { HTMLElement } from "./HTMLElement";

export class HTMLEmbedElement extends HTMLElement {}
registerSubclass("embed", HTMLEmbedElement);

// Reflected properties, strings.
// HTMLEmbedElement.height => string, reflected attribute
// HTMLEmbedElement.src => string, reflected attribute
// HTMLEmbedElement.type => string, reflected attribute
// HTMLEmbedElement.width => string, reflected attribute
reflectProperties([{ height: [""] }, { src: [""] }, { type: [""] }, {
  width: [""],
}], HTMLEmbedElement);

// Unimplemented
// HTMLEmbedElement.align => string, not reflected
// HTMLEmbedElement.name => string, not reflected
