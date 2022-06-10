const assert = require("assert");

const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "x";
const DIVIDE = "÷";

class Node {
  constructor(operator, value, left, right) {
    this.operator = operator;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  result() {
    switch (this.operator) {
      case ADD:
        return this.left.result() + this.right.result();
      case SUBTRACT:
        return this.left.result() - this.right.result();
      case MULTIPLY:
        return this.left.result() * this.right.result();
      case DIVIDE:
        return this.left.result() / this.right.result();
      default:
        return this.value;
    }
  }

  toString() {
    switch (this.operator) {
      case ADD:
        return `(${this.left.toString()} + ${this.right.toString()})`;
      case SUBTRACT:
        return `(${this.left.toString()} - ${this.right.toString()})`;
      case MULTIPLY:
        return `(${this.left.toString()} x ${this.right.toString()})`;
      case DIVIDE:
        return `(${this.left.toString()} ÷ ${this.right.toString()})`;
      default:
        return this.value.toString();
    }
  }
}

const tree = new Node(
  DIVIDE,
  null,
  new Node(
    ADD,
    null,
    new Node("", 7, null, null),
    new Node(
      MULTIPLY,
      null,
      new Node(SUBTRACT, null, new Node("", 3, null, null), new Node("", 2, null, null)),
      new Node("", 5, null, null)
    )
  ),
  new Node("", 6, null, null)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
