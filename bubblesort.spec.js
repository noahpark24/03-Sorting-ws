describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("Ordena un Array", function () {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  it("Debe cambiar de posicion", function () {
    let prueba = [1, 2];
    expect(swap(prueba, 0, 1)).toEqual([2, 1]);
  });

  it("Un array ordenado debe mantenerse ordenado", function () {
    expect(bubbleSort([1, 2, 4, 5, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  it("Un Arreglo a la inversa debe terminar ordenado", function () {
    expect(bubbleSort([8, 5, 4, 2, 1])).toEqual([1, 2, 4, 5, 8]);
  });

  it("Debe llevar maximo 10 swaps", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([2, 1, 3, 4]);
    expect(window.swap.calls.count()).toEqual(5);
  });
});
