const tabuadas = (numeros: number[]): string => {
  let resuldado: string = "";
  let n = 1;

  for (const n of numeros) {
    for (let i = 0; i <= 10; i++) {
      resuldado += `${n} X ${i} = ${n * i} \n`;

      if (i === 10) {
        resuldado += "---------------------\n";
      }
    }
  }

  return resuldado;
};

console.log(tabuadas([1, 2, 3, 4]));
