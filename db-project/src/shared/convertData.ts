const convertData = (data: number[][], type: any) => {
  if (!data || !data[type]) {
    console.error("Invalid data or type", data, type);
    return [];
  }

  const convertedData = data[type].map((item: any) => {
    return {
      date: item[0].toFixed(0),
      [type]: item[1].toFixed(0),
    };
  });

  return convertedData;
};

export default convertData;
