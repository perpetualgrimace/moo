export default function getTheme(val, isOpen) {
  // great
  if (val > 3.5) return isOpen ? "spring-dark" : "spring-md";
  // not great
  else if (val < 2) return "salmon";
  // okay
  return isOpen ? "sun-dark" : "sun-light";
}
