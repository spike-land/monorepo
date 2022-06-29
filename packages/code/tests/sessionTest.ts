import { test } from "uvu";
import * as assert from "uvu/assert";

import {
  hashCode,
  makePatch,
  patch as applyPatch,
  startSession,
} from "../js/session";

const state1 = { code: "", transpiled: "", i: 33, css: "", html: "" };
const state2 = { code: "dddd", transpiled: "", i: 33, css: "", html: "" };
let hash1 = 0;
let hash2 = 0;

test("At start hashCode is 0", () => {
  assert.is(hashCode(), 0);
});

test("Then we can start it", () => {
  startSession("z", { name: "z", state: state1 });
  hash1 = hashCode();
  assert.is(Number(hashCode()), hash1);
});

test("It remembers", () => {
  //     startSession("z",{name: "z", state1} );

  //     const state2 = {code:"yoo", transpiled: "", i:33, css: "", html:""};
  //     makePatch(state2);
  assert.is(hashCode(), hash1);
  // //    assert.is(hashCode(),0);
});

test("wont start a new session", () => {
  const hash1 = hashCode();

  startSession("z", { name: "z", state: state2 });

  assert.is(Number(hashCode()), hash1);
});

test("applies a path", async () => {
  const p = await makePatch(state2);
  assert.is(hashCode(), hash1);
  assert.is(p.oldHash, hash1);

  hash2 = p.newHash;

  await applyPatch(p);

  assert.is(hashCode(), p.newHash);
});
