const api = "/api/users/search?name=";
const search = async data => {
  let result = await fetch(`${api}${data}`);
  let users = await result.json();
  console.log(users);
  return users;
};

export default search;
