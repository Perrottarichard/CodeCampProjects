import React from 'React'
import React from 'ReactDOM'

class App extends React
    .Component {
    render() {
        return (
            <div className="App">
                <div class="container" id="bootstrap-override">
                    <div>
                        <h1>Give it a Try!</h1></div>
                    <div className="row">
                        <div className="col-md-12">
                            <Displayed />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Displayed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '# Welcome to my Markdown Previewer!\n## This is an example of some markdown text\n### Try to make your own using this previewer.\nYou can add some code using backticks, `<div></div>`.\n>Just type in this box, and your formatted text will appear in the box to the right.\n\nYou can write a multiline code block:\n\n```\n\nfunction test(){\n\nconsole.log("Test");\n\n}\n\n```\n\nYou can list items like this\n-       Genre\n - Rock\n - Blues\n - Classical\n\n### You can make your text **bold** too!\n\n### Create links [FreeCodeCamp](https://www.freecodecamp.org/perrottarichard)\n...or even embed your favorite photos![pic](https://avatars0.githubusercontent.com/u/57297531?s=460&v=4)'
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
            <div className="well d-inline-flex" id="wellwell"><h3>Type here:</h3>
                <textarea rows='20' className="form-control" id="editor" value={this.state.input} onChange={this.handleChange} />

                <div className="well d-inline-flex" id='wellwell'>

                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input) }} />
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root'));