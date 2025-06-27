//setTimeout difference using let and var
// var → One i shared by all → value is 3 after loop ends.

// let → New i for each loop → each setTimeout remembers its own.
var i;
for (i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
