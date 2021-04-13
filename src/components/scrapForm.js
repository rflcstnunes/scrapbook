import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ScrapMessage from './scrapMessage';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const defaultProps = {
  bgcolor: 'purple',
  m: 2,
  style: { width: '300px', height: '300px' },
  borderColor: 'purple',
};

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [saveScrap, setSave] = useState(false);
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box display="flex" 
      justifyContent="center" 
      border={1} 
      {...defaultProps} 
      borderRadius="10%">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Title"
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
        <div>
          <TextField
            id="standard-multiline-static"
            label="Your message"
            multiline
            rows={5}
            defaultValue=""
          />
        </div>
        <div className="saveScrap">
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={() => setSave(true)} >
              <Fab color="primary">
                <SaveSharpIcon/>
              </Fab>
            </Button>
          </Box>
        </div>
        <div>
          
        </div>
      </div>
    </Box>
      {saveScrap ? <ScrapMessage/> : null }
    </form>
  );
}
