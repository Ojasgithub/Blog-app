// Post2.js

import { Card } from "react-bootstrap";

const Post2 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
"https://qph.cf2.quoracdn.net/main-qimg-9924f4b394cdab9454ddc9a29d3153c0-pjlq"
				width={20}
				height={250}
			/>
			<Card.Body>
				<Card.Title>DSA</Card.Title>
				<Card.Text>
                DSA is Data Structure Algorithm where we learn about different types of data structures and algorithms that we can use for solving problems that are happening in the IT Industries. DSA is one of the main root of the programming.
                The complete process to learn DSA from scratch can be broken into 4 parts:

				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post2;
