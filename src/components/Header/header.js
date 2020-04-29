import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import "./header.css";

const Header = ({switchStyle, darkTheme, userName }) => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

  return (
    <div className="chat-header">
      <div className="left-header">Hi, {userName}</div>
      <div className="right-header">

          <FormGroup row>
              <FormControlLabel
                  control={
                      <Switch
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                          onClick={switchStyle}
                      />
                  }
                  label={darkTheme ? "дневной режим" : "ночной режим"}
              />
          </FormGroup>
      </div>
    </div>
  );
};

export default Header;
