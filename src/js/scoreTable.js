var ScoreTableClass = React.createClass({
	render : function (argument) {
		return(
			<section id="scoreInsertWrap">
				<p class="title">جدول ثبت امتیاز</p>
				<table class="scoreInsertTable">
					<thead>
						<tr>
							<th>سینا شعاعی (0)</th>
							<th>حسین عابدی (0)</th>
							<th>احمد ایللو (0)</th>
							<th>مهدی توحیدلو (0)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" class="valuePlace" /></td>
							<td><input type="text" class="valuePlace" /></td>
							<td><input type="text" class="valuePlace" /></td>
							<td><input type="text" class="valuePlace" /></td>
						</tr>
					</tbody>
				</table>
				<button>مرحله بعد!</button>
			</section>
		)
	}
})
module.export(ScoreTableClass)