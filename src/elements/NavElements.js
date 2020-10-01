import styled from 'styled-components';

export const NavWrapper = styled.nav`
  margin: 0 auto;
  height: 5rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  svg {
    fill: ${(props) => props.theme.colors.dark1};
    width: 180px;
    flex: flex-start;
  }
`;

// export const LinkElement = styled.div`
//   width: ;
// `;
