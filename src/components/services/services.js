export const filter = (recordData, mapData) => {
  const searchValue = recordData?.values
    ? recordData?.values.toLowerCase()
    : null;

  if (!searchValue) {
    return mapData;
  } else {
    return mapData.filter(item =>
      item.location.toLowerCase().includes(searchValue)
    );
  }
};
