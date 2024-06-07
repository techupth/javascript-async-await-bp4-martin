// Exercise #4
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
// Start coding here
function data(profile) {
  console.log(profile);
}

async function fetchData() {
    const profile = await getJohnProfile();
    data(profile);
}

fetchData();