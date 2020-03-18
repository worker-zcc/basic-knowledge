let count = 0;
function fn(n) {
    let cache = {};
    function _fn(n) {
        if (cache[n]) {
          console.log(cache[n],n)
            return cache[n];
        }
        console.log(n+'n')
        count++;
        if (n == 1 || n == 2) {
            return 1;
        }
        let prev = _fn(n - 1);
        cache[n - 1] = prev;
        let next = _fn(n - 2);
        cache[n - 2] = next;
        return prev + next;
    }
    return _fn(n);
}
console.log(fn(10))
