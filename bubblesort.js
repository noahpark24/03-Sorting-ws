function ordenar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
    }
  }
}

function bubbleSort(array) {
  if (array.length === 0) return array;

  for (let i = 0; i < array.length; i++) {
    while (array[i] > array[i + 1]) {
      ordenar(array);
    }
  }

  return array;
}

function swap(arr, index1, index2) {
  let referencia = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = referencia;
  return arr;
}

// function bubbleSort(array) {
//   if (array.length === 0) return array;

//   let prueba = [];

//   function ordenar(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (swap(arr[i] , arr[i+1])) {
//         let referencia = arr[i];
//         arr[i] = arr[i+1];
//         arr[indexi+1] = referencia;
//       }
//     }
//   }

//   return prueba;
// }

// function swap(n1, n2) {
//   if (n1 > n2) return true;

//   // let referencia = arr[index1];
//   // arr[index1] = arr[index2];
//   // arr[index2] = referencia;
// }
