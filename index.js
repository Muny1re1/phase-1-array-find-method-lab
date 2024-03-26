const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(record){
    const win = record.find(object => object.result  === "W"); 
     return win? win.year: undefined;
};
superbowlWin(record);
console.log(superbowlWin(record));