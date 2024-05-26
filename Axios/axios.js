// function getUsers() {
//   /* *** Forma 1 *** */
//    axios.get("https:jsonplaceholder.typicode.com/users");
//   /* *** Forma 2  *** */
//    axios({
//      url: "https:jsonplaceholder.typicode.com/users",
//      method: "GET",
//      params: {
//        _limit: 5,
//      },
//    })
//      .then((res) => console.log(res))
//      .catch((err) => console.log(err));
// }
// getUsers();

function usePost() {
  /* *** Forma 1 *** */
  // axios({
  //   method: "POST",
  //   url: "https://reques.in/api/register",
  //   data: {
  //     email: "cesar4056@gmail",
  //     password: "XGx5v",
  //   },
  // })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  /* *** Forma 2 *** */
  axios
    .post("https://reques.in/api/register", {
      email: "cesar4056@gmail",
      password: "XGx5v",
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
usePost();
