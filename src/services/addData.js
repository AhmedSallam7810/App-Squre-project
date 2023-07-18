async function add_client(token, newClient) {
  var formdata = new FormData();
  formdata.append("name_en", newClient.name_en);
  formdata.append("name_ar", newClient.name_ar);
  formdata.append("department_id", newClient.department_id);

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "X-Language": "en",
      Authorization: `Bearer ${token}`,
    },
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    "https://alrayademo-back.appssquare.com/api/admin/job-titles",
    requestOptions
  );

  return response.status;
}

module.exports = {
  add_client,
};
