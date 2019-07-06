import extractUnit from './extractUnit';

it('extracts unit', () => {
  expect(extractUnit({ name: "1L Milk" })).toEqual({ name: "Milk", unit: "1L" });
});

it('does nothing when unit is already present', () => {
  expect(extractUnit({ name: "1L Milk", unit: "0L" })).toEqual({ name: "1L Milk", unit: "0L" });
});

it('extracts only first unit', () => {
  expect(extractUnit({ name: "1L 2L Milk" })).toEqual({ name: "2L Milk", unit: "1L" });
});
