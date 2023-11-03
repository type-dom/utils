// const template = "Hello, {{name}}!";
// const data = { name: "Alice" };
// const renderer = mustache(template);
// console.log(renderer(data)); // 输出 "Hello, Alice!"
export function mustache(template: string, data: Record<string, string>) {
  const pattern = /\{\{([\w\s\.]+)\}\}/g;
  let result = template;
  let match;
  while (match = pattern.exec(template)) {
    const keys = match[1].trim().split('.');
    let value: any = data[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      value = value[keys[i]];
    }
    if (value !== undefined) {
      result = result.replace(match[0], value);
    }
  }
  return result;
}
