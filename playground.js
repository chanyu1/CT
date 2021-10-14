const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1");
    }, 1000);
  });
};

const f2 = (message) => {
  // console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2");
    }, 2000);
  });
};

const f3 = (message) => {
  // console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3");
    }, 3000);
  });
};

// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log);

async function order() {
  try {
    // const result1 = await f1();
    // const result2 = await f2(result1);
    // const result3 = await f3(result2);
    // console.log(result3);

    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("exit");
}

order();
