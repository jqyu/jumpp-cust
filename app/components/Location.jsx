import { React, NestedViewList, View, BackButton } from 'reapp-kit';

class Location extends React.Component {

  componentDidMount() {
    this._id = this.router().getCurrentParams().location_id;
    console.log('ay im mounting:', this._id);
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <NestedViewList {...this.props.viewListProps}>  
        <View {...this.props} title="Location" titleLeft={backButton}>
          <p>hello friend you are on a location route</p>
        </View>
      </NestedViewList>
    );
  }

}

export default Location;
