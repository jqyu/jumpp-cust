import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

class Orders extends React.Component {

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View {...this.props} title="Orders">
          <p>hello friends ur orders r h3r3</p>
        </View>
      </NestedViewList>
    );
  }
}

export default Reapp(Orders);
