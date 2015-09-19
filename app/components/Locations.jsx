import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

var results = [
  {id: 'poop', name: 'test'},
  {id: 'shit', name: 'test2'},
  {id: 'fuck', name: 'test3'}
];

class Locations extends React.Component {

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View {...this.props} title="Locations" titleLeft={backButton}>
          <p>Hello, from the locations route!</p>
          {
            results.map((obj) => {
              return (
                <Button onTap={() => this.router().transitionTo('location', null, { location_id: obj.id })}>
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

export default Reapp(Locations);
