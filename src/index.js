module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    return matrix
        .map((element, i) => (i % 2 !== 0 ? element.reverse() : element))
        .flat();
};
