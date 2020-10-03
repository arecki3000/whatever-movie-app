import styled from 'styled-components';

export const P = styled.p`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-family: ${(props) => {
    switch (props.font) {
      case 'main':
        return props.theme.fonts.main;
      case 'second':
        return props.theme.fonts.second;
      default:
        return props.theme.fonts.main;
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1.125rem';
    }
  }};
  text-decoration: ${(props) => (props.decoration ? props.decoration : 'none')};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.dark1;
    }
  }};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : '0')};
  font-style: ${(props) => (props.styling ? props.styling : 'normal')};
`;

export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.dark1;
    }
  }};
  font-weight: ${(props) => (props.weight ? props.weight : '700')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;
export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.dark1;
    }
  }};
  font-weight: 400;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const Span = styled.span`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      case 'xxSmall':
        return '0.7rem';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1.125rem';
    }
  }};
  text-decoration: ${(props) => (props.decoration ? props.decoration : 'none')};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'light':
        return 200;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'light':
        return props.theme.colors.light;
      default:
        return props.theme.colors.dark1;
    }
  }};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : '0')};
  font-style: ${(props) => (props.styling ? props.styling : 'normal')};
`;
