var Main = React.createClass({
	render  : function () {
		return(<div>
			<PersonNumberClass />
			<ScoreTableClass />
			<ScoreViewClass />
		</div>)
	}
})

ReactDOM.render(<Main />,document.getElementById("mainWrap"));