import React from "react";

import WOMENS_DATA from "./womens.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class WomensPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: WOMENS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="womens-page">
        {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default WomensPage;
