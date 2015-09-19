import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

class Orders extends React.Component {

  render() {
    return (
      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View>
            <p>hello friends ur orders r h3r3</p>
          </View>
        </NestedViewList>
      </View>
    );
  }
}

export default Reapp(Orders);
