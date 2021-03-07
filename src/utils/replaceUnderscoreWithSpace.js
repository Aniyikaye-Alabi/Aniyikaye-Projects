export default function replaceUnderscoreWithSpace(value) {
  if (typeof value !== "string") throw new Error("value must be  string");

  return value.replaceAll("_", " ");
}
