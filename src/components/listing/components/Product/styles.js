import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	background: #fff;
	transition: 0.3s all;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
		0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

	&:hover {
		transition: 0.3s all;
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
			0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
	}
`;

export const CardHeader = styled.div`
	padding: 1rem 0.8rem;

	a {
		color: #000;
		text-decoration: none;
		font-weight: bold;
		font-size: 18pt;
	}
`;

export const CardFooter = styled.div`
	padding: 1rem 0.8rem;
`;
