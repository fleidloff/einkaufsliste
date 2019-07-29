import extractUnit from "./extractUnit";

it("extracts unit", () => {
  expect(extractUnit({ name: "1L Milk" })).toEqual({
    name: "Milk",
    unit: "1L"
  });
});

it("extracts unit with long number", () => {
  expect(extractUnit({ name: "10L Milk" })).toEqual({
    name: "Milk",
    unit: "10L"
  });
});

it("does nothing when unit is already present", () => {
  expect(extractUnit({ name: "1L Milk", unit: "0L" })).toEqual({
    name: "1L Milk",
    unit: "0L"
  });
});

it("extracts only first unit", () => {
  expect(extractUnit({ name: "1L 2L Milk" })).toEqual({
    name: "2L Milk",
    unit: "1L"
  });
});

it("extracts unit only if unit is present at beginning", () => {
  expect(extractUnit({ name: "Milk 1L" })).toEqual({
    name: "Milk 1L",
    unit: undefined
  });
});

it("Unit can also be just a number if the name is only 1 word", () => {
  expect(extractUnit({ name: "10 waffles" })).toEqual({
    name: "waffles",
    unit: "10"
  });
});
