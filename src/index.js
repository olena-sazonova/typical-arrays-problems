exports.min = function min(array) {
    if (!array || array.length <= 0) return 0;
    array.sort((prev, next) => prev - next);

    return array[0];
};

exports.max = function max(array) {
    if (!array || array.length <= 0) return 0;
    array.sort((prev, next) => prev - next);

    return array[array.length - 1];
};

exports.avg = function avg(array) {
    if (!array || array.length <= 0) return 0;
    let res =
        array.reduce((acc, el) => {
            return acc + el;
        }) / array.length;
    return res;
};
