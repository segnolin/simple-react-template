window.React = require('react');
window.ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return(
            <div className="hello-world">
                Hello, world!
            </div>
        );
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('react-container')
);
