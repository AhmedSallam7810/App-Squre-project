

async function deleteById(token,id) {
  var formdata = new FormData();

  var requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "X-Language": "en",
      Authorization: `Bearer ${token}`,
    },
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    `https://alrayademo-back.appssquare.com/api/admin/job-titles/${id}`,
    requestOptions
  );

  if (response.status) {
    console.log("client deleted successfully");
  } else {
    console.log("error");
  }
}

export default deleteById ;
