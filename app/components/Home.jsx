import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

class Home extends React.Component {

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp-cust">
          <p>pretend we already made the search</p>

          <Button onTap={() => this.router().transitionTo('locations')}>
            ayy take me to the results, bitch
          </Button>
          <Button onTap={() => this.router().transitionTo('wallet')}>
            wallet me up yo
          </Button>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
