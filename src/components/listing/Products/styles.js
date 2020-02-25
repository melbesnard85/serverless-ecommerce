import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 6.25rem;

	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 0;
	}
`;

export const FiltersWrapper = styled.div`
	display: flex;
	align-items: center;

	*:last-child {
		padding-right: 0;
	}

	@media (max-width: 1200px) {
		width: 100%;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
	}
`;

export const Result = styled.div`
	font-size: 12pt;
	color: ${({ theme: { colors } }) => colors.darkGray};

	span {
		font-weight: 600;
		margin-right: 0.3125rem;
		color: ${({ theme: { colors } }) => colors.darkBlack};
	}
`;

export const Filters = styled.div`
	display: flex;
	margin-right: 1.875rem;

	@media (max-width: 600px) {
		display: none;
	}
`;

export const Products = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 1.875rem;
	grid-row-gap: 4.0625rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 680px) {
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: unset;
	}

	${({ grid }) =>
		!grid &&
		`
		grid-template-columns: 1fr;
	`}
`;
