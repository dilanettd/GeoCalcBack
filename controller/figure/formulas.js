const formulas = [
  {
    id: "square",
    attributesPerimeter: ["side"],
    attributesArea: ["side"],
    perimeter: (side) => side * 4,
    area: (side) => side ** 2,
  },
  {
    id: "rectangle",
    attributesPerimeter: ["width", "length"],
    attributesArea: ["width", "length"],
    perimeter: (width, length) => 2 * (width + length),
    area: (width, length) => width * length,
  },
  {
    id: "triangle",
    attributesPerimeter: ["a", "b", "c"],
    attributesArea: ["base", "height"],
    perimeter: (a, b, c) => a + b + c,
    area: (base, height) => (base * height) / 2,
  },
  {
    id: "circle",
    attributesPerimeter: ["radius"],
    attributesArea: ["radius"],
    perimeter: (radius) => 2 * Math.PI * radius,
    area: (radius) => Math.PI * radius ** 2,
  },
];

export default formulas;
