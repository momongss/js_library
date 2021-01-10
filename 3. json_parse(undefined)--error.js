function json_check(value) {
  json = JSON.stringify(value);
  console.log(`----------${value}--------`);
  console.log(json);
  console.log(JSON.parse(json));
}

json_check(null);
// json_check(undefined);  // error!! undefined 는 parse가 안된다.
json_check(0);
json_check("");
