import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

class Wallet extends React.Component {

  render() {
    return(
      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View {...this.props}>
            <p>this is a wallet muhfuckas</p>
          </View>

          {this.props.child()}
        </NestedViewList>
      </View>
    );
      
  }
}

export default Reapp(Wallet);
