const list = document.querySelector('.list');

const sort_name_btn = document.querySelector('.sort-name');
const sort_meta_btn = document.querySelector('.sort-meta');
const sort_age_btn = document.querySelector('.sort-age');

console.log(sort_name_btn, sort_meta_btn, sort_age_btn);

let list_items = [{
  name: 'Batman',
  meta: 'black',
  age: 57
},
{
  name: 'Superman',
  meta: 'Red & Blue',
  age: 35
},
{
  name: 'Green Arrow',
  meta: 'Green',
  age: 32
},
{
  name: 'Nightwing',
  meta: 'Blue & Black',
  age: 30
},
{
  name: 'The Flash',
  meta: 'Red & Yellow',
  age: 30
}]

let desc = false;
sort_name_btn.addEventListener('click', ()=> {
  let array = sort_array_by(list_items, 'name', desc);
  displayList(array);
  desc = !desc;
})

sort_meta_btn.addEventListener('click', ()=> {
  let array = sort_array_by(list_items, 'meta', desc);
  displayList(array);
  desc = !desc;
})

sort_age_btn.addEventListener('click', ()=> {
  let array = sort_array_by(list_items, 'age', desc);
  displayList(array);
  desc = !desc;
})


function sort_array_by(array, sort, desc) {
  array.sort( function(a, b) {
    if(a[sort] < b[sort]) return -1;
    if(a[sort] > b[sort]) return 1;
    return 0;
  });

  if(desc) array.reverse();

  return array
}

function displayList(array = []) {

  list.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    const template = `<ul class="list-item">
    <li id="item-title">${item.name}</li><li id="item-meta">${item.meta}</li><li id="item-age">${item.age}</li></ul>`
    
    list.insertAdjacentHTML('beforeend', template);
  }
};

displayList(list_items);