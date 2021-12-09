import React from "react";

import HATS_DATA from "./hats.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class HatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: HATS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="hats-page">
        {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default HatsPage;
