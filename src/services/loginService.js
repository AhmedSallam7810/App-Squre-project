const loginFun = async (email, password) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  var requestOptions = {
    method: "POST",
    headers: { Accept: "application/json", "X-Language": "en" },
    body: formData,
    redirect: "follow",
  };

  const response = await fetch(
    "https://alrayademo-back.appssquare.com/api/admin/login",
    requestOptions
  );
  return response;
};

module.exports = { loginFun };
