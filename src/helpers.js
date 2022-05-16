export function convertInspectionToDate(string) {
  const year = string.substring(0, 4);
  let month = string.substring(5, 7);
  const day = string.substring(8, 10);
  const date = new Date();
  date.setMonth(month - 1);
  month = date.toLocaleString("en-US", {
    month: "short",
  });
  return `${month} ${day}, ${year}`;
}

export function randomImage() {
  const imageList = ["A", "B", "C", "Pending"];
  const image = imageList[Math.floor(Math.random() * 4)];
  return image;
}
