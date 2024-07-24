function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i], i, collection) === false) {
                break;
            }
        }
    } else {
        for (let key in collection) {
            if (callback(collection[key], key, collection) === false) {
                break;
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, collection) => {
        result.push(callback(value, key, collection));
    });
    return result;
}

function myReduce(collection, callback, acc) {
    let hasInitialValue = arguments.length === 3;
    myEach(collection, (value, key, collection) => {
        if (!hasInitialValue) {
            acc = value;
            hasInitialValue = true;
        } else {
            acc = callback(acc, value, key, collection);
        }
    });
    return acc;
}

function myFind(collection, predicate) {
    let result;
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key], key, collection)) {
                return collection[key];
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, key, collection) => {
        if (predicate(value, key, collection)) {
            result.push(value);
        }
    });
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    }
    return Object.keys(collection).length;
}

function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}