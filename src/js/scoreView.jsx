import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ScoreView extends Component {
	render() {
		return(
			<aside class="scoreBoard">
				<p>نفرات برتر</p>
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
}
