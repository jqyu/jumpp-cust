import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

class Wallet extends React.Component {

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return(
      <NestedViewList {...this.props.viewListProps}>
        <View {...this.props} title="Wallet" titleLeft={backButton}>
          <p>this is a wallet muhfuckas</p>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
    
  }
}

export default Reapp(Wallet);
