var bla = {
  "page":{
    "pageTitle": "Restaurant Bacco",
    "pageDescription": "Restaurant mediteranean ofera salon de evenimente: nunti, botezuri, evenimente festive si muzica live "
  },
  "description":{
    "text":[
      {
        "title": "paragraph 1",
        "paragraph": ["Restaurant international cu specific mediteranean va punem la dispozitie un meniu diversificat"]
      },
      {
        "title": "paragraph 2",
        "paragraph": ["Specializati in evenimente private organizam nunti si botezuri si alte cumetrii :))"],
        "paragraph": ["Specializati in evenimente private organizam nunti si botezuri si alte cumetrii :))"]
      }
    ]
  },
  "menu":{
    "button":[
      {
        "label": "Despre noi",
        "src": "#"
      },
      {
        "label": "Menu",
        "src": "#"
      },
      {
        "label": "Contact",
        "src": "#"
      },
      {
        "label": "Evenimente",
        "src": "#"
      }
    ]
  }
};


console.log("salut!");
console.log("=================");
var arr = [
  {title : "primul"},
  {title : "al doilea"},
  {title : "al treilea"},
]

for(i = 0; i < arr.length; i++ ){
  console.log(arr[i].title)
}
console.log("=================");
arr.forEach(function(obiect, key){
  console.log(obiect.title)
});

bla.description.text.forEach(function(textItem, cheie2){
  console.log(textItem.paragraph);
  console.log(cheie2);
})
console.log("=================");

arr.forEach((obiect, key) => console.log(obiect.title))
arr.forEach((obiect, key) => {
  console.log(obiect.title)
})
console.log("=================");

arr.map(aa => console.log(aa.title))
console.log("=================");

for (uuu in arr) {
  console.log(arr[uuu].title);
}
