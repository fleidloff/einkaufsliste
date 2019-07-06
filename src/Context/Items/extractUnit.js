const unitRegex = /([0-9]\s{0,1}[a-zA-Z]{0,3}){0,1}\s*(.*)/


// todo: allow unit at the end?
export default function extractUnit(item) {
  // it item has a unit already, do nothing
  if(item.unit) {
    return item;
  }

  const [_, unit, name] = item.name.match(unitRegex);

  return { ...item, unit, name };
}