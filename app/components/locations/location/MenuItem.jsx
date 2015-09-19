import { React, View, BackButton } from 'reapp-kit';

class MenuItem extends React.Component {

  componentDidmount() {
    console.log('i should inherit parent route params:', this.router().getCurrentParams());
  }

  render() {
    return (
      <View {...this.props}>
        <p>Hello friend ju-de is a poop</p>
      </View>
    );
  }
}

export default MenuItem;
