import './list-container.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ListContainer(){
    return <div class="list-container">
        <div class="banner">
            <img class="bannerImage"src="https://i.imgur.com/Y7CWhEo.png"></img>
        </div>
        <div class="header">
        <h class="title">What do you have to do?</h>
        </div>
        <div class="content">
            <ul id="list">
                <li id="item">
                <FormControlLabel
                    control={
                    <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                    />
                    }
                    label="list-item"
                />
                <IconButton aria-label="delete">
                <DeleteIcon />
                </IconButton>
                </li>
            </ul>
            <div class="add-item">
                <input type="text" id="input" placeholder="Add your to-do"></input>
            </div>
        </div>
    </div>
}