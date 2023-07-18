const fetchAllData = async (token) => {
  var requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Language": "en",
      Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
  };

  const response = await fetch(
    "https://alrayademo-back.appssquare.com/api/admin/job-titles?skip=&offset=&q=",
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

async function fetchById(token, id) {
  var requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Language": "en",
      Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
  };

  const response = await fetch(
    `https://alrayademo-back.appssquare.com/api/admin/job-titles/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
}

module.exports = {
  fetchAllData,
  fetchById,
};
