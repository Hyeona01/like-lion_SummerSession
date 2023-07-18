import { Outlet } from 'react-router-dom';
import {createGlobalStyle} from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./Theme.jsx";
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { WithIcon } from "./components/Sub.jsx";
import { styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		font-family: 'Noto Sans KR', sans-serif;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
		font-family: 'Noto Sans KR', sans-serif;
	}
	*{
		font-family: 'Noto Sans KR', sans-serif;
	}
	body {
		line-height: 1;
		background-color: ${(props) => props.theme.bgColor};
		color:${(props) => props.theme.textColor};
		margin: 20px 100px;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		color: ${(props) => props.theme.textColor};
	}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Login = styled.button`
  background-color: ${(props) => props.theme.postBold};
  color: ${(props) => props.theme.bgColor};
  border-radius: 30px;
`;

function App() {

const { pathname } = useLocation();
const [mode, setMode] = useState("lightMode");
const theme = mode === "lightMode" ? lightMode : darkMode;

const onChangeMode = () => {
  setMode(mode === "lightMode" ? "darkMode" : "lightMode");
};

	return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Link to="/">
          <div style={{ fontSize: "20px" }}>
            {pathname === "/detail" ? (
              <WithIcon style ={{width: '250px'}}>
                <img width={"30px"} src="../../public/img/logo.PNG" /> &nbsp;
                현아.log
              </WithIcon>
            ) : (
              "velog"
            )}
          </div>
        </Link>
        <Wrapper style={{ width: "130px" }}>
          <span
            className={mode === "lightMode"
                ? "material-symbols-outlined"
                : "material-symbols-outlined"
            }
            onClick={onChangeMode}
          >
            {mode === "lightMode" ? "sunny" : "dark_mode"}
          </span>
          {/* <span className="material-symbols-outlined">dark_mode</span> */}
          <span className="material-symbols-outlined">search</span>
          <Login>로그인</Login>
        </Wrapper>
      </Wrapper>
      <Outlet />
    </ThemeProvider>
  );
}

export default App
