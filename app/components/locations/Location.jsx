import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

var items = [ 
  {id: 'poop', name: 'poop'},
  {id: 'shit', name: 'shit'},
  {id: 'fuck', name: 'fuck'}
]

class Location extends React.Component {

  componentDidMount() {
    this.locationId = this.router().getCurrentQuery().location_id;
    this.ref = new Firebase('https://jumpp.firebaseio.com/business/'+this.locationId);
    this.bindAsArray(this.ref, 'business');
  }

  render() {

    console.log('Location render:', this.props);

    return (
      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View>
            <p>hello friend you are on a location route</p>
            {
              items.map((obj) => {
                return (
                  <Button onTap={() => this.router().transitionTo('menu-item', null, { location_id: this._id, menu_item_id: obj.id })}>
                    name: {obj.name}
                  </Button>
                );
              })
            }
          </View>

          {this.props.child()}
        </NestedViewList>
      </View>
    );
  }

}

reactMixin(Location.prototype, ReactFireMixin);

export default Reapp(Location);
