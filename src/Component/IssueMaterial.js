//"../connect-sql-server/dbfiles/dbConfig"

const IssueMaterial = (cuttingOrder, coilNumber) => {
  console.log('cutting order : ' + cuttingOrder);
  console.log('coilNumbe : ' + coilNumber);

  var myHeaders = new Headers();
  myHeaders.append(
    "X-API-Key",
    "DZZ2yARGoKvIAOZIowIX5a1drg9dT7PnoAHpcgnDaeDpM"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic ZXBpY29yOmVwaWNvcg==");

  var raw = JSON.stringify({
    plNegQtyAction: true,
    ds: {
      IssueReturn: [
        {
          Company: "EPIC03",
          TranDate: "2023-07-26",
          PartNum: "SECE-0.7X1220XC",
          TranQty: 11,
          DimCode: "KG",
          LotNum: "1",
          OrderNum: 0,
          OrderLine: 0,
          OrderRel: 0,
          FromJobNum: "",
          FromAssemblySeq: 0,
          FromJobSeq: 0,
          FromWarehouseCode: "CHI",
          FromBinNum: "00-00-00",
          IssuedComplete: false,
          ToJobNum: "2533",
          ToAssemblySeq: 0,
          ToJobSeq: 10,
          ToWarehouseCode: "PRD",
          ToBinNum: "MCH",
          ToJobPartNum: "SECE-0.7X140.5XC",
          ToAssemblyPartNum: "SECE-0.7X140.5XC",
          ToJobSeqPartNum: "SECE-0.7X1220XC",
          TranType: "STK-MTL",
          UM: "KG",
          RowMod: "A",
        },
      ],
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://win-97ttn20bl4t/kinetic2022/api/v2/odata/EPIC03/Erp.BO.IssueReturnSvc/PerformMaterialMovement",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default IssueMaterial 
;
