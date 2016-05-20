// var person_cls = require("./js/personNumber.js");
// var table_cls = require("./js/personNumber.js");
// var score_cls = require("./js/personNumber.js");
// this is ES2015 way of importing modules. I imported React and React.Component from react package
import React, { Component } from 'react';
import ScoreView from './js/ScoreView'
import ReactDOM from 'react-dom';
import styles from './main.styl';

class App extends Component {
	render() {
		console.log('hohohoho');
		return(
			<div className={styles.message}> hello2!!! </div>
		)
	}
};

ReactDOM.render( <App key="main"/>, document.getElementById('main') );
