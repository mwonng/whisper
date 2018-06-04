export const removeExt = (fileName) => {
  var newstr = fileName.replace(/\..+$/, '');
  return newstr
}