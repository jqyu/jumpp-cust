import { React, View, BackButton } from 'reapp-kit';

class MenuItem extends React.Component {

  componentDidmount() {
    console.log('i should inherit parent route params:', this.router().getCurrentParams());
  }

  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title="Menu Item" titleLeft={backButton}>
        <p>Hello friend ju-de is a poop</p>
      </View>
    );
  }
}

export default MenuItem;
