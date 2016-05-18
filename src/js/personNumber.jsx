var PersonNumberClass = React.createClass({
	render : function () {
		 return(
		 	<aside class="scoreBoard">
				<button>نوبت دهی خودکار</button>
				<figure class="imageContainer">
					<img src="images/ahmad.jpg" />
					<figcaption>نفر اول</figcaption>
				</figure>
				<figure class="imageContainer">
					<img src="images/shoaei.jpg" />
					<figcaption>نفر دوم</figcaption>
				</figure>
				<figure class="imageContainer">
					<img src="images/abedi.jpg" />
					<figcaption>نفر سوم</figcaption>
				</figure>
				<figure class="imageContainer">
					<img src="images/mehdi.jpg" />
					<figcaption>نفر چهارم</figcaption>
				</figure>
			</aside>
		 )
	}
})
module.export(PersonNumberClass);