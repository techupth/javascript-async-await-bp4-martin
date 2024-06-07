// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
function data(profile) {
  console.log(profile);
};

function dataOrder(order) {
  console.log(order);
};

async function fetchData() {
  try {
    const profile = await getJohnProfile();
    data(profile);
    const order = await getJohnOrders();
    dataOrder(order);
  } catch (error) {
    console.error(error);
  }
}

fetchData()