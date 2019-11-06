const List = (head) => (tail) => {
    return {
        head: head,
        tail: tail
    };
}

const head = (list) => 
    list.head
const tail = (list) => 
    list.tail

const range = (lower) => (upper) => 
    lower > upper ? null : List (lower) (range (lower + 1) (upper))

const map = (f) => (list) => 
    list === null ? null
    : List (f (head (list))) (map (f) (tail (list)))

const fizzbuzz = (x) =>
    ((x % 3 === 0 ? 'Fizz' : '') + (x % 5 === 0 ? 'Buzz' : ''))  || x

console.log(map (fizzbuzz) (range(1) (10000)))
