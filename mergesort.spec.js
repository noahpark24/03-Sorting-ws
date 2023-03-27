describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    var array = [1, 2, 3, 4, 5];
    expect(split(array)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
});
