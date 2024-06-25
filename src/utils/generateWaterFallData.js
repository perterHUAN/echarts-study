function generateWaterFallData(data) {
  const preSum = [], currMinus = [], currPlus = [];
  let tot = 0;
  for(let i = 0; i < data.length; ++i) {
    const isPositive = data[i] > 0;
    preSum.push(isPositive ? tot : tot + data[i]);
    currPlus.push(isPositive ? data[i] : "-");
    currMinus.push(!isPositive ? -data[i] : "-");
    tot += data[i];
  }
  console.log("preSum: ", preSum," currPlus: ", currPlus, " currMinus: ", currMinus);
  return [preSum, currPlus, currMinus];
}

export default generateWaterFallData;