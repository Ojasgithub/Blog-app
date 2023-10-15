// Post4.js

import { Card } from "react-bootstrap";

const Post4 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
"https://static.tildacdn.com/tild3762-3063-4735-b434-373137633561/Does_Data_Science_Re.jpeg"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>Data Science</Card.Title>
				<Card.Text>
                Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions. Data science uses complex machine learning algorithms to build predictive models. The data used for analysis can come from many different sources and presented in various formats. Now that you know what data science is, let’s see the data science lifestyle.


				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post4;
