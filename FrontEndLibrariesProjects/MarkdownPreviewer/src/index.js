import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked';
import './custom.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="container" id="bootstrap-override">
                    <div>
                        <h1>Give it a Try!</h1></div>
                    <Displayed />
                </div>
            </div>
        );
    }
}
class Displayed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '# Type in this box to preview your markdown!\n## This is an example of some markdown text\n### Try to make your own using this previewer.\nYou can add some code using backticks, \n\n`<div></div>`\n`console.log("Hello")`\n\n\nYou can list items like this:\n- Genre\n - Jazz\n - Blues\n - Classical\n\nYou can make your text **bold**, or \n> add a blockquote\n### Create links [FreeCodeCamp](https://www.freecodecamp.org/perrottarichard)...or even embed a photo of Miles Davis!\n![pic](https://lh3.googleusercontent.com/proxy/T-A2ZMQRELiIIGZfAbaBIxD47JunVaceqPbhvhxsFg7BMotOcqyuj5ZlLuniEG_L2x_b_o0ifCK7nHj6yBcYKjH9JB1QuQBeV_5Od76lVPIS70W-I5rkhV3Xpv0h6WPhNbN1V9vk6GQjaOMZJwSdTl84pnJ0P0jsn4M9Yrg7qc_gKwSAUbM)'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div className="row">

                <div className="col">
                    <textarea className="form-control" id="editor" rows="40" cols="10" value={this.state.input} onChange={this.handleChange}>{this.state.input}</textarea></div>
                <div className="col" id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}></div>
            </div>

        )
    }
}
ReactDOM.render(
    <App />, document.getElementById('root'));