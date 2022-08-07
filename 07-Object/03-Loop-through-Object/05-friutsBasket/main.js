let fruit = {
  Mango: 1,
  Apple: 5,
  Banana: 10
};

for (let objects in fruit) {
  if (`${fruit[objects]}` > 1) {
    fruit[`${objects}`.toString() + "s"] = fruit[`${objects}`];
    delete fruit[`${objects}`];
    //Check that 'S' has been added
    //console.log(`${objects}`.toString()+"s");
  }
}

for (let objects in fruit) {
  console.log(`${objects}: ${fruit[objects]}`);
}
