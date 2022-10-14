import { Button, MenuItem, TextField } from "@mui/material";
import "./Home.css";
import Categories, {} from "../../Data/Categories";
import { useState } from "react";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage"
import { useNavigate } from "react-router-dom";

const Home = ({name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] =useState("");
    const [error, setError] =useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
         if(!category || !difficulty || !name) {
            setError(true);
            return;
         } else {
             setError(false);
             fetchQuestions(category, difficulty);
             navigate("/quiz");
         }
    };

    return (
        <div className="content">
           <div className="settings">
             
              <div className="settings_select">
                {error && <ErrorMessage>Please Fill all the fields.</ErrorMessage>}
                 <TextField 
                   style={{marginBottom : 25}} 
                   label="Enter Your Name" 
                   variant="outlined"
                   onChange={(e)=> setName(e.target.value)}/>

                   <TextField 
                     select 
                     label="Select Category" 
                     variant="outlined"
                     style={{marginBottom:30}}
                     onChange={(e)=> setCategory(e.target.value)}>
                         {Categories.map((cat)=>(
                             <MenuItem className="menu-item" key={cat.category} value={cat.value}>
                                {cat.category}
                             </MenuItem>
                         ))}
                   </TextField>

                   <TextField
                     select 
                     label="Select Difficulty" 
                     variant="outlined"
                     style={{marginBottom:30}}
                     onChange={(e)=> setDifficulty(e.target.value)}>

                        <MenuItem key="Easy" value="easy">
                          Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                          Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                          Hard
                        </MenuItem>

                   </TextField>

                   <Button
                     variant="contained" 
                     color="primary"
                     size="large"
                     onClick={handleSubmit}>
                      Start Quiz
                   </Button>
              </div>
           </div>

          

        </div>
    );
}

export default Home;