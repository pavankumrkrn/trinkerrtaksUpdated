import * as urls from "../URLS/urls";

const getHistory = async (phone) => {
  let response = await fetch(urls.history(phone))
    .then((data) => data.json())
    .catch((error) => error);
  return response;
};

const validate = async (phone) => {
  let response = await fetch(urls.validate(phone))
    .then((data) => data.json())
    .catch((error) => error);
  return response;
};

const signUp = async (user) => {
  let response = await fetch(urls.signUp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .catch((error) => error);
  return response;
};

const update = async (image, phone) => {
  let response = await fetch(urls.update(phone), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  })
    .then((data) => data.json())
    .catch((error) => error);
  return response;
};

export { signUp, update, validate, getHistory };
