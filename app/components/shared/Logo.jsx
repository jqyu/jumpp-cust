import { React, Tappable } from 'reapp-kit';

var styles = {
  self: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    zIndex: 100,
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: '60px',
    height: '60px',
    color: '#00FFCB',
    padding: '0'
  },

  large: {
    top: '20px',
    height: '100px',
    lineHeight: '100px',
    fontSize: '60px'
  }

}

class Logo extends React.Component {
  render() {
    console.log('rerender...', this.props.large);
    return (
      <Tappable style={Object.assign({}, styles.self, this.props.large && styles.large)} onTap={this.props.onTap}>
        jumpp
      </Tappable>
    );
  }
}

export default Logo;
