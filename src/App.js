import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar, FormGroup, ControlLabel,Button, HelpBlock, FormControl, Row, Col, Grid } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
// import {  } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// import { Nav } from 'react-bootstrap';
// import { NavItem } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
class App extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    return (
      <div className="App">
       <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <span className='brandImage-wrapper'><img src='http://agentz.ai/images/Agentz%20Final-01.png' className='brandImage'/></span>
              <Navbar.Brand>
                <a href="#brand">AGENTZ TRANSLATOR</a>
              </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row className="show-grid">
            <Col >
              <form>
                <FormGroup controlId="formBasicText" // validationState={this.getValidationState()}
                >
                  <ControlLabel>Enter the the text to be converted!</ControlLabel>
                  <FormControl
                    type="text"
                    // value={this.state.value}
                    placeholder="Enter text"
                    // onChange={this.handleChange}
                  />
                    <FormControl.Feedback />
                    <HelpBlock>We will translate it for you based on our special algorithm. ! Hang on!</HelpBlock>
                  </FormGroup>
                <FormGroup controlId="formControlsSelectMultiple">
                 <ControlLabel>Select Languages</ControlLabel>
                   <Select
                    name="form-field-name"
                    value={this.state.selectedOption}
                    multi={true}
                    onChange={this.handleChange}
                    options={[
                      { value: 'one', label: 'One' },
                      { value: 'two', label: 'Two' },
                    ]}
                  />
                </FormGroup>
           <Button>Translate</Button>
        </form>
      </Col>
    </Row>
  </Grid>
</div>
    );
  }
}

export default App;
