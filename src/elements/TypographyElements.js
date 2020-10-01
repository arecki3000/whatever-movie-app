import styled from 'styled-components';

export const H1 = styled.h1`
  display: block;
  color: ${(props) =>
    props.home ? props.theme.colors.light : props.theme.colors.dark2};
  font-family: ${(props) => (props.font ? props.font : props.theme.fonts.code)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return props.theme.spacings.small;
      case 'medium':
        return props.theme.spacings.medium;
      case 'large':
        return props.theme.spacings.large;
      default:
        return props.theme.spacings.medium;
    }
  }};
`;

export const H2 = styled.h2`
  display: block;
  color: ${(props) =>
    props.home ? props.theme.colors.light : props.theme.colors.dark2};
  font-family: ${(props) => (props.font ? props.font : props.theme.fonts.code)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return props.theme.spacings.small;
      case 'medium':
        return props.theme.spacings.medium;
      case 'large':
        return props.theme.spacings.large;
      default:
        return props.theme.spacings.medium;
    }
  }};
`;
