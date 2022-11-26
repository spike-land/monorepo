import anyTest, { TestInterface } from "ava";
import { Document } from "../../worker-thread/dom/Document";
import { MutationRecord, MutationRecordType } from "../../worker-thread/MutationRecord";
import { createTestingDocument } from "../DocumentCreation";

const test = anyTest as TestInterface<{
  document: Document;
}>;

test.beforeEach((t) => {
  t.context = {
    document: createTestingDocument(),
  };
});

test.serial.cb("Element.classList.replace mutation observed, single pre-existing value", (t) => {
  const { document } = t.context;
  const el = document.createElement("div");
  el.classList.value = "foo";
  const observer = new document.defaultView.MutationObserver((mutations: MutationRecord[]): void => {
    t.deepEqual(mutations, [
      {
        type: MutationRecordType.ATTRIBUTES,
        attributeName: "class",
        target: el,
        value: "bar",
        oldValue: "foo",
      },
    ]);
    observer.disconnect();
    t.end();
  });

  document.body.appendChild(el);
  observer.observe(document.body);
  el.classList.replace("foo", "bar");
});

test.serial.cb("Element.classList.replace mutation observed, multiple pre-existing values", (t) => {
  const { document } = t.context;
  const el = document.createElement("div");
  el.classList.value = "foo bar baz";
  const observer = new document.defaultView.MutationObserver((mutations: MutationRecord[]): void => {
    t.deepEqual(mutations, [
      {
        type: MutationRecordType.ATTRIBUTES,
        attributeName: "class",
        target: el,
        value: "bar baz",
        oldValue: "foo bar baz",
      },
    ]);
    observer.disconnect();
    t.end();
  });

  document.body.appendChild(el);
  observer.observe(document.body);
  el.classList.replace("foo", "bar");
});
