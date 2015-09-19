import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

var results = [
  {id: 'poop', name: 'test'},
  {id: 'shit', name: 'test2'},
  {id: 'fuck', name: 'test3'}
];

class Locations extends React.Component {

  componentDidMount() {
    this.ref = new Firebase('https://jumpp.firebaseio.com/business');
    this.bindAsArray(this.ref.limitToLast(25), 'businesses');
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View {...this.props} title="Locations" titleLeft={backButton}>
          <p>Hello, from the locations route!</p>
          {
            this.state &&
            this.state.businesses &&
            this.state.businesses.map((obj) => {
              return (
                <Button onTap={() => this.router().transitionTo('location', null, { location_id: obj['.key'] })}>
                  name: {obj.name}
                </Button>
              );
            })
          }
        </View>
        
        {this.props.child()}
      </NestedViewList>
    );
  }
};

reactMixin(Locations.prototype, ReactFireMixin);

export default Reapp(Locations);
