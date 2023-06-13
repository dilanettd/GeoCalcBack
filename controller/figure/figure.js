import formulas from "./formulas";
import fs from "fs";

export default {
  getFigures(req, res) {
    try {
      const figuresData = fs.readFileSync("./db/figures.json");
      const figuresList = JSON.parse(figuresData);
      res.json(figuresList);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occured !",
      });
    }
  },

  getUnits(req, res) {
    try {
      const unitsData = fs.readFileSync("./db/units.json");
      const unitsList = JSON.parse(unitsData);
      res.json(unitsList);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occured !",
      });
    }
  },

  perimeter(req, res) {
    const { id, values } = req.body;
    const figure = formulas.find((f) => f.id === id);

    if (!figure) {
      return res.status(400).json({
        message: `Invalid figure id "${id}"`,
      });
    }

    const attrCount = figure.attributesPerimeter.length;

    if (values.length !== attrCount) {
      return res.status(400).json({
        message: `Expected ${attrCount} attribute values for "${id}", but received ${values.length}`,
      });
    }

    const perimeter = figure.perimeter(...values.map(Number));
    res.json({
      perimeter: perimeter,
    });
  },

  area(req, res) {
    const { id, values } = req.body;
    const figure = formulas.find((f) => f.id === id);

    if (!figure) {
      return res.status(400).json({
        message: `Invalid figure id "${id}"`,
      });
    }

    const attrCount = figure.attributesArea.length;

    if (values.length !== attrCount) {
      return res.status(400).json({
        message: `Expected ${attrCount} attribute values for "${id}", but received ${values.length}`,
      });
    }

    const area = figure.area(...values.map(Number));
    res.json({
      area: area,
    });
  },
};
