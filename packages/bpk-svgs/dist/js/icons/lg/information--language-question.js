import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M20.7 7.5l-.3-1.7c-.2-1.1-1.1-2-2.2-2.3-1.5-.3-2.9-.5-4.4-.5h-3.6c-1.5 0-2.9.2-4.4.5-1.1.3-2 1.2-2.2 2.3l-.3 1.7c-.4 2-.4 4 0 5.9l.3 1.7c.2 1.1 1.1 2 2.2 2.3.7.2 1.4.3 2.2.4v2.6c0 .4.3.6.6.6h.1c1.6-.6 3-1.6 4-3h1.1c1.5 0 2.9-.2 4.4-.5 1.1-.3 2-1.2 2.2-2.3l.3-1.7c.4-2 .4-4 0-6zm-7.9 7.7c-.5.4-1.1.4-1.6 0-.4-.4-.4-1.1 0-1.5.4-.4 1.1-.4 1.6 0 .4.4.4 1.1 0 1.5zm2-6c-.2.4-.5.8-.9 1.1l-.5.5c-.3.3-.5.7-.6 1.1v.4h-1.7c0-.5.1-1 .2-1.5.2-.4.5-.8.8-1.1.3-.3.6-.6.8-.9.1-.2.2-.5.2-.7 0-.8-.3-1.1-1-1.1-.3 0-.6.1-.8.3-.2.3-.3.6-.3.9H9.1c0-.8.3-1.5.8-2 .6-.5 1.4-.8 2.2-.7.8 0 1.6.2 2.2.7.5.5.8 1.2.8 1.9 0 .4-.1.8-.3 1.1z" /></svg>;
  }

}