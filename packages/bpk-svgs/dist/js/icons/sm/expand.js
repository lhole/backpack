import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M3 14.7l.1 4.5c0 1 .8 1.7 1.8 1.8h4.4c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2l-2.2-.1 3.9-3.9c.5-.5.4-1.3-.1-1.7-.5-.4-1.2-.4-1.6 0l-3.9 3.9-.1-2.2c0-.7-.6-1.2-1.3-1.2-.5.1-1 .6-1 1.3zm18-5.4l-.1-4.5c0-1-.8-1.7-1.8-1.8h-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2l2.2.1L13 9.4c-.5.5-.4 1.3.1 1.7.5.4 1.2.4 1.6 0l3.9-3.9.1 2.2c0 .7.6 1.2 1.3 1.2.5-.1 1-.6 1-1.3z" /></svg>;
  }

}