import React from "react";

import SNEAKERS_DATA from "./sneakers.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class SneakersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SNEAKERS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="sneakers-page">
        {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default SneakersPage;
