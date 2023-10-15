// Post3.js

import { Card } from "react-bootstrap";
const Post3 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src="https://www.hermesinfotech.com/wp-content/uploads/2020/06/Stages-Of-Web-Development.jpg"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>Web Dev</Card.Title>
                Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
                It can be categories in three different categories as:
				<Card.Text>
					
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post3;
