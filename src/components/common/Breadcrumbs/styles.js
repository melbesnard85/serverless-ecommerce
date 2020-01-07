import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	justify-content: center;
`;

export const Item = styled.a`
	display: inline-block;
	color: ${({ active }) => (active ? "#222" : "#999")};
	font-size: 14px;
	cursor: ${({ active }) => (active ? "unset" : "pointer")};

	&:after {
		content: "";
		display: inline-block;
		vertical-align: middle;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #bbb;
		margin: 0 10px;
	}

	&:last-child {
		&:after {
			content: unset;
		}
	}
`;
