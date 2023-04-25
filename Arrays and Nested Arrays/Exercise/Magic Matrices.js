function magicMatrices(matrix){
    let firstArrSum = matrix[0].reduce((acc,value)=> acc + value,0)
    console.log(matrix.every(el=>el.reduce((acc,value)=> acc + value,0) === firstArrSum,0))

}magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])