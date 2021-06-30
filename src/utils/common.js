// function capitalize the first letter of a string
export const capitalizeName = (name) => {
  return name && name.charAt(0).toUpperCase() + name.slice(1);
}