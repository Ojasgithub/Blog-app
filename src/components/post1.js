// Post1.js

import { Card } from "react-bootstrap";

const Post1 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
				"https://www.webtekno.com/images/editor/default/0003/47/9081c992ca8b6f9fd55a9f36c6f5fae08ed5f57f.jpeg"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>JAVA</Card.Title>
				<Card.Text>
                Java is a widely-used programming language for coding web applications. 
                It has been a popular choice among developers for over two decades, 
                with millions of Java applications in use today. Java is a multi-platform,
                 object-oriented, and network-centric language that can be used as a platform 
                 in itself. It is a fast, secure, reliable programming language for coding
                  everything from mobile apps and enterprise software to big data applications
                   and server-side technologies. Because Java is a free-to-use and a versatile language, it builds localized and distributed software. Some common uses of Java include:
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	);
};

export default Post1;
