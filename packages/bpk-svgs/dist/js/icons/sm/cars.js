import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M3 20c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2H3v2zm14 0c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2h-4v2zm1.2-15.1C17.8 3.8 17 3 15.8 3H8.1c-.9 0-1.9.7-2.2 1.9L4 10.3c-.6.3-1 1-1 1.7v5h18v-5c0-.7-.4-1.4-1-1.7l-1.8-5.4zm-10.8.7c.1-.4.4-.6.8-.6h7.6c.4 0 .7.3.8.6L18 10H6l1.4-4.4zM6.5 15c-.8 0-1.5-.7-1.5-1.5S5.7 12 6.5 12s1.5.7 1.5 1.5S7.3 15 6.5 15zm11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /></svg>;
  }

}