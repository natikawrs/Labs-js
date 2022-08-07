let state1 = { username: 'john', point: 100, loading: true };
let edit = { loading: false, point:75, success: true};

let clone1 = Object.assign({},state1);
console.log(clone1)

let clone2 = Object.assign({},state1, edit);
console.log(clone2)
