export default function sortArrayByObjKey(array, sortKey) {
  let sortedObjArr = [...array];

  if (sortKey === "quality") {
    sortedObjArr.sort((a, b) => {
      if (a.quality.overall < b.quality.overall) return -1;
      if (a.quality.overall > b.quality.overall) return 1;
      return 0;
    });
  } else {
    sortedObjArr.sort((a, b) => {
      if (a[[sortKey]] < b[[sortKey]]) return -1;
      if (a[[sortKey]] > b[[sortKey]]) return 1;
      return 0;
    });
  }

  return sortedObjArr;
}
