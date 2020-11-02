function provjeri(lista, pojam, status){
  for(let i=0; i<10; i++){
    if(lista[i].ime.search(pojam) >= 0 || lista[i].prezime.search(pojam) >= 0){
      if(lista[i].upisan == status){
        return true
      }
      else{
        console.log('Student se nalazi na popisu, ali status se ne podudara');
      }
    }

  }
  return false;
}


let lista = [
  {
    ime: "Marko",
    prezime: "Horvat",
    upisan: true,
  },
  {
    ime: "Ivana",
    prezime: "Marić",
    upisan: true,
  },
  {
    ime: "Nikolina",
    prezime: "Simetić",
    upisan: true,
  },
  {
    ime: "Josip",
    prezime: "Vukić",
    upisan: true,
  },
  {
    ime: "Gregor",
    prezime: "Buić",
    upisan: true,
  },
  {
    ime: "Ivo",
    prezime: "Srdan",
    upisan: true,
  },
  {
    ime: "Ana",
    prezime: "Vukoja",
    upisan: true,
  },
  {
    ime: "Igor",
    prezime: "Dobran",
    upisan: true,
  },
  {
    ime: "Marija",
    prezime: "Lalić",
    upisan: true,
  },
  {
    ime: "Dubravko",
    prezime: "Vošten",
    upisan: true,
  }
];

let pojam = "Marko";
let status = true;

if(provjeri(lista, pojam,status)){
  console.log('Student se nalazi na popisu');
}
else{
  console.log('Student se NE nalazi na popisu');
}
