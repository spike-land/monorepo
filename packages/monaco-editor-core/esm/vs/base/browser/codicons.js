/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as dom from "./dom";
const renderCodiconsRegex = /(\\)?\$\((([a-z0-9\-]+?)(?:~([a-z0-9\-]*?))?)\)/gi;
export function renderCodicons(text) {
  const elements = new Array();
  let match;
  let textStart = 0, textStop = 0;
  while ((match = renderCodiconsRegex.exec(text)) !== null) {
    textStop = match.index || 0;
    elements.push(text.substring(textStart, textStop));
    textStart = (match.index || 0) + match[0].length;
    const [, escaped, codicon, name, animation] = match;
    elements.push(escaped ? `$(${codicon})` : renderCodicon(name, animation));
  }
  if (textStart < text.length) {
    elements.push(text.substring(textStart));
  }
  return elements;
}
export function renderCodicon(name, animation) {
  return dom.$(
    `span.codicon.codicon-${name}${
      animation ? `.codicon-animation-${animation}` : ""
    }`,
  );
}
