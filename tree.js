const assert = require("assert");

const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "x";
const DIVIDE = "÷";

class Node {
  constructor(operator, value, left = null, right = null) {
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

  #formatLeftAndRightWith(operator) {
    return `(${this.left.toString()} ${operator} ${this.right.toString()})`;
  }

  toString() {
    switch (this.operator) {
      case ADD:
        return this.#formatLeftAndRightWith(ADD);
      case SUBTRACT:
        return this.#formatLeftAndRightWith(SUBTRACT);
      case MULTIPLY:
        return this.#formatLeftAndRightWith(MULTIPLY);
      case DIVIDE:
        return this.#formatLeftAndRightWith(DIVIDE);
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
    new Node("", 7),
    new Node(MULTIPLY, null, new Node(SUBTRACT, null, new Node("", 3), new Node("", 2)), new Node("", 5))
  ),
  new Node("", 6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
