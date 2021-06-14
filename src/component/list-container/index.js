const list = document.getElementById("list");
const [checked, setChecked] = React.useState(true);

const handleChange = (event) => {
  setChecked(event.target.checked);
};

let LIST = [];
let id = 0;
/* Each time an item is entered, this will add a list item to the html*/
function addToDo(toDo) {
  const text = `<li class="item id="item">
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        id="checkbox"
                    />
                    <p class="text">${toDo}</p>
                    <IconButton id="delete">
                    <DeleteIcon />
                    </IconButton>
                </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
}

/* When user types in the text field, this event listener will add the toDo function into a
    list storage with default parameters*/
const input = document.getElementById("input");
document.addEventListener("keyup", function (event) {
  if (event.key === 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      input.value = "";
      id++;
    }
    input.value = ""; //reset the input back to an empty string
  }
});
