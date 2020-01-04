/*
 * @LastEditors  : zcc
 * @Date: 2020-01-04 16:38:05
 * @Description:  哈希表
 */
function HashTable() {
  this.storage = []; // 相当于hash表的容器
  this.count = 0; // 记录数组元素个数
  this.limit = 7; // 数组长度（需要是质数）
  HashTable.prototype.hashFn = function(str, size) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      // 霍纳算法：37 *hashCode + str.charCodeAt(i)
      // 将字符串的每一个字符转变为unicode编码：str.charCodeAt(i)
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    // 取余操作
    let index = hashCode % size;
    return index;
  };
  HashTable.prototype.put = function(key, value) {
    let index = this.hashFn(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;

        return;
      }
    }
    bucket.push([key, value]);
    this.count++;
    // 判断是否需要扩容还是缩容
    if (this.count > this.limit * 0.75) {
      const newSize = this.limit * 2;
      const newPrime = this.getPrime(newSize);
      this.resize(newPrime);
    }
  };
  HashTable.prototype.get = function(key) {
    let index = this.hashFn(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  };
  HashTable.prototype.remove = function(key) {
    let index = this.hashFn(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          const newSize = Math.floor(this.limit / 2);
          const newPrime = this.getPrime(newSize);
          this.resize(newPrime);
        }
        return tuple[1];
      }
    }
    return null;
  };
  HashTable.prototype.isEmpty = function() {
    return this.count === 0;
  };
  HashTable.prototype.size = function() {
    return this.count;
  };
  // 扩容
  HashTable.prototype.resize = function(newlimit) {
    const oldstorage = this.storage;

    this.storage = [];
    this.limit = newlimit;
    this.count = 0;

    for (let i = 0; i < oldstorage.length; i++) {
      const bucket = oldstorage[i];
      if (bucket == null) continue;
      for (let j = 0; j < bucket.length; j++) {
        const tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  };
  HashTable.prototype.isPrime = function(num) {
    const temp = parseInt(Math.sqrt(num));
    for (let i = 0; i <= temp; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  HashTable.prototype.getPrime = function(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  };
}

let hash = new HashTable();

hash.put("abc", "A");
hash.put("bcd", "B");
hash.put("cdf", "C");
console.log(hash.isEmpty());
console.log(hash.size());
console.log(hash);
console.log(hash.get("bcd"));
hash.put("bcd", 123);
console.log(hash);
hash.remove("cdf");
console.log(hash);
