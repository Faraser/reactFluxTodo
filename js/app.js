/**
 * Created by Sergey_T on 21.08.2015.
 */
var React = require('react');

var Hello = React.createClass({
    render: function(){
        return(
            <div>{"HelloWorld"}</div>
        )
    }
});

React.render(<Hello />, document.body);