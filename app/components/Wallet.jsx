import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';
var DropIn = require('braintree-react').DropIn;
var braintree = require('braintree-web');

class Wallet extends React.Component {
  
  render() {
    return(
      <View> 
        <form id="checkout" method="post" action="/checkout">
          <DropIn braintree={braintree} />
        <input name="pay" type="submit" value="Pay $10" />
        </form>
      </View>
    );
      
  }
}

export default Reapp(Wallet);
