import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M6 7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2s2-.9 2-2V9c0-1.1-.9-2-2-2zm6-5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm6 11c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2v-5c0-1.1-.9-2-2-2z" /></svg>;
  }

}