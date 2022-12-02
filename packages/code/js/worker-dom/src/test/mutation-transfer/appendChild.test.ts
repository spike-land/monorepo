import anyTest, { TestInterface } from "ava";
import { MutationFromWorker } from "../../transfer/Messages";
import { TransferrableKeys } from "../../transfer/TransferrableKeys";
import { TransferrableMutationType } from "../../transfer/TransferrableMutation";
import { Document } from "../../worker-thread/dom/Document";
import { createTestingDocument } from "../DocumentCreation";
import { Emitter, emitter } from "../Emitter";

const test = anyTest as TestInterface<{
  document: Document;
  emitter: Emitter;
}>;

test.beforeEach((t) => {
  const document = createTestingDocument();

  t.context = {
    document,
    emitter: emitter(document),
  };
});

test.serial.cb("Node.appendChild transfers new node", (t) => {
  const { document, emitter } = t.context;
  const div = document.createElement("div");

  function transmitted(
    strings: Array<string>,
    message: MutationFromWorker,
    buffers: Array<ArrayBuffer>,
  ) {
    t.deepEqual(
      Array.from(new Uint16Array(message[TransferrableKeys.mutations])),
      [
        TransferrableMutationType.CHILD_LIST,
        document.body[TransferrableKeys.index],
        0,
        0,
        1,
        0,
        div[TransferrableKeys.index],
      ],
      "mutation is as expected",
    );
    t.end();
  }

  Promise.resolve().then(() => {
    emitter.once(transmitted);
    document.body.appendChild(div);
  });
});

test.serial.cb("Node.appendChild transfers new node, sibling node", (t) => {
  const { document, emitter } = t.context;
  const div = document.createElement("div");
  const p = document.createElement("p");

  function transmitted(
    strings: Array<string>,
    message: MutationFromWorker,
    buffers: Array<ArrayBuffer>,
  ) {
    t.deepEqual(
      Array.from(new Uint16Array(message[TransferrableKeys.mutations])),
      [
        TransferrableMutationType.CHILD_LIST,
        document.body[TransferrableKeys.index],
        0,
        div[TransferrableKeys.index],
        1,
        0,
        p[TransferrableKeys.index],
      ],
      "mutation is as expected",
    );
    t.end();
  }

  document.body.appendChild(div);
  Promise.resolve().then(() => {
    emitter.once(transmitted);
    document.body.appendChild(p);
  });
});

test.serial.cb("Node.appendChild transfers new node, tree > 1 depth", (t) => {
  const { document, emitter } = t.context;
  const div = document.createElement("div");
  const p = document.createElement("p");

  function transmitted(
    strings: Array<string>,
    message: MutationFromWorker,
    buffers: Array<ArrayBuffer>,
  ) {
    t.deepEqual(
      Array.from(new Uint16Array(message[TransferrableKeys.mutations])),
      [
        TransferrableMutationType.CHILD_LIST,
        div[TransferrableKeys.index],
        0,
        0,
        1,
        0,
        p[TransferrableKeys.index],
      ],
      "mutation is as expected",
    );
    t.end();
  }

  document.body.appendChild(div);
  Promise.resolve().then(() => {
    emitter.once(transmitted);
    div.appendChild(p);
  });
});
