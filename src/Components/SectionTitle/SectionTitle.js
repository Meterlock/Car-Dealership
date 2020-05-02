import React from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
        <div>
            <h2>{this.props.title}</h2>
        </div>      
    );
  }  
}

export default SectionTitle;