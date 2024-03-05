// Implement Stack

class Stack<T> {
    private items: T[] = []

    push(item: T):void{
        this.items.push(item)
    }

    pop():T | undefined {
        return this.items.pop()
    }

    peek(): T | undefined {
        return this.items[this.items.length-1]
    }

    isEmpty():boolean {
      return this.items.length === 0
    }

    size():number {
        return this.items.length;
    }

}

const newStack = new Stack<number>();
//const newStack2 = new Stack<string>();

newStack.push(2)
newStack.push(3)
newStack.push(4)

console.log(`Stack size: ${newStack.size()}`)
console.log(`Stack peek: ${newStack.peek()}`)
console.log(`Stack pop: ${newStack.pop()}`)
