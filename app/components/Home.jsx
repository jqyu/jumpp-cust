import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

import Logo from './shared/Logo';

class Home extends React.Component {

  goHome = () => {
    this.router().transitionTo('home');
  }

  render() {
    let child = this.props.child();
    return (
      <div>
        <NestedViewList {...this.props.viewListProps}>
          <View> 
            <p style={{padding: '50px 0px'}}>pretend we already made the search</p>

            <Button onTap={() => this.router().transitionTo('locations')}>
              ayy take me to the results, bitch
            </Button>
            <Button onTap={() => this.router().transitionTo('wallet')}>
              wallet me up yo
            </Button>
          </View>

          {child}

        </NestedViewList>

        <Logo large={!child} onTap={this.goHome} />
      </div>
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
