function triangleNextEdge(side1, side2) {
    let result = (side1 + side2) - 1
    return result;
}

console.log(triangleNextEdge(100, 20))