const unitRegex = /([0-9]+[a-zA-Zäöüß]*){0,1}\s*(.*)/;

// todo: allow unit at the end?
export default function extractUnit(item) {
  // it item has a unit already, do nothing
  if (item.unit) {
    return item;
  }

  // eslint-disable-next-line no-unused-vars
  let [_, unit, name] = item.name.match(unitRegex);

  return { ...item, unit, name };
}
