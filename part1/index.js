for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 && i % 5 === 0) console.log(i + " buzz bazz");
  if (i % 2 === 0 && i % 5 !== 0) console.log(i + " buzz");
  if (i % 2 !== 0 && i % 5 === 0) console.log(i + " bazz");
}
