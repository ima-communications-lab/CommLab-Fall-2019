function changeDecoration() {
  //getting elements by class name returns an array. you then have to iterate through the list to set properties for all of the included members.
  let d = document.getElementsByClassName("decorated");

  for (let i = 0; i < d.length; i++) {
    d[i].style.fontFamily = "Helvetica";
    d[i].style.fontSize = "20px";
    d[i].style.color = "red";
  }

  //getting elements by tag name works exactly the same way
  let links = document.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    links[i].style.textDecoration = "none";
    links[i].style.color = "green";
    links[i].style.fontSize = "10px";
  }
}
