async function edit_client(token, id, data) {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("X-Language", "en");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name_en: data.name_en,
    name_ar: data.name_ar,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    `https://alrayademo-back.appssquare.com/api/admin/job-titles/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result.status;
}

module.exports = {
  edit_client,
};
