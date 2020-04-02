import React, { Component } from 'React'
import React from 'ReactDOM'
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
            input: '# Type in this box to preview your markdown!\n## This is an example of some markdown text\n### Try to make your own using this previewer.\nYou can add some code using backticks, `<div></div>`.\n\n*You can write a multiline code block:*\n```\nfunction test(){\n\nconsole.log("Test");\n\n}\n\n```\n\nYou can list items like this:\n- Genre\n - Jazz\n - Blues\n - Classical\n\nYou can make your text **bold**, or \n> add a blockquote\n### Create links [FreeCodeCamp](https://www.freecodecamp.org/perrottarichard)...or even embed a photo of yourself!\n![pic](https://lh3.googleusercontent.com/JCUoAAxgaNtYAb4LvZVliny2VelZesumJo5ezXvyF5AZnG9gJoR03CK0MWxIx2ukvYzJ=s85)'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    render() {
        function createMarkup() {
            let inp = marked(this.state.input);
            return { __html: inp };
        }
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