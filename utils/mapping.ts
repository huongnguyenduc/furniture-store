export function mappingData(object: any, mapping: any) {
  const result: any = {};
  for (const key in mapping) {
    const newKey = mapping[key];
    if (object.hasOwnProperty(key)) {
      result[newKey] = object[key];
    } else {
      result[newKey] = null;
    }
  }
  return result;
}
