import React from "react";

import JACKETS_DATA from "./jackets.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class JacketsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: JACKETS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="jackets-page">
        {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default JacketsPage;
