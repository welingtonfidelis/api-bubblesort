
// TODO: Implement the bubble sort algorithm
function bubbleSort(array) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            
            //Compara item atual com proximo
            if (array[j] > array[j + 1]) {
                var tmp = array[j]; //armazena distancia temporaria
               
                array[j] = array[j + 1]; //substitui distanicia atual pela proxima
                array[j + 1] = tmp; //substitui proximo distancia pelo temporario (anterior) 
            }
        }
    }

    return array;
}

module.exports = bubbleSort;
