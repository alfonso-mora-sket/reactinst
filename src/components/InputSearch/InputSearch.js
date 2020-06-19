import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

import './inputSearch.css'

class InputSearch extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <InputGroup className="mb-3" className="inputSearch">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => this.props.onChangeText(e)}
                />
                <InputGroup.Append>
                    <Button 
                        variant="outline-secondary"
                        onClick={this.props.apiSearch}
                    >
                        Buscar
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default InputSearch