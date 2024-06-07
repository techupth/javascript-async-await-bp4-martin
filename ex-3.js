//Exercise #3
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

getJohnProfile().then((profile) => {
    data(profile);
    return getJohnOrders();
  }).then((orders) => {
    dataOrder(orders);
  });