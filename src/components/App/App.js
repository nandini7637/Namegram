import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';


const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {
    state = {
        headerText: "NAMEGRAM",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {

        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}


export default App;