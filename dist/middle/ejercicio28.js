"use strict";
// Implement Stack
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const newStack = new Stack();
//const newStack2 = new Stack<string>();
newStack.push(2);
newStack.push(3);
newStack.push(4);
console.log(`Stack size: ${newStack.size()}`);
console.log(`Stack peek: ${newStack.peek()}`);
console.log(`Stack pop: ${newStack.pop()}`);
