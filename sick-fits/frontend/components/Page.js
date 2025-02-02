import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    //font-size: 10px;
  }
  body {
    font-family:  'radnika_next',--apply-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    
  }
  a {
    text-decoration: none;
    color: var(--black);
    
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family:  'radnika_next',--apply-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
