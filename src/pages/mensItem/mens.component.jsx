import React from "react";

import MENS_DATA from "./mens.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class MensPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: MENS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="mens-page">
        {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default MensPage;
