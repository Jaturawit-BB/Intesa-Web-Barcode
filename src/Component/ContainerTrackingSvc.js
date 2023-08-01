//"../connect-sql-server/dbfiles/dbConfig"

const ContainerTrackingSvc = (event) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "X-API-Key",
    "DZZ2yARGoKvIAOZIowIX5a1drg9dT7PnoAHpcgnDaeDpM"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic ZXBpY29yOmVwaWNvcg==");

  var raw = JSON.stringify({
    ds: {
      ContainerHeader: [
        {
          Company: "EPIC03",
          ContainerID: 28,
          ShipDate: null,
          Shipped: true,
          ShipStatus: "SHIPPED",
        },
      ],
    },
    continueProcessingOnError: true,
    rollbackParentOnChildError: true,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://win-97ttn20bl4t/kinetic2022/api/v2/odata/EPIC03/Erp.BO.ContainerTrackingSvc/UpdateExt",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};




export default ContainerTrackingSvc ;