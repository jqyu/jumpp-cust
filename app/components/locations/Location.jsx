import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

var items = [ 
  {id: 'poop', name: 'poop'},
  {id: 'shit', name: 'shit'},
  {id: 'fuck', name: 'fuck'}
]

class Location extends React.Component {

  componentDidMount() {
    this._id = this.router().getCurrentQuery().location_id;
    console.log('ay im mounting:', this.router().getCurrentQuery());
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View {...this.props} title={"Location: "+this._id} titleLeft={backButton}>
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
    );
  }

}

export default Reapp(Location);
