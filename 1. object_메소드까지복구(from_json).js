function from(json) {
  return Object.assign(new Duct(), JSON.parse(json));
}
