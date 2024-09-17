export default function getFilledObjectFields(object) {
  return Object.fromEntries(
    Object.entries(object).filter(([_, value]) => value !== '')
  );
}
