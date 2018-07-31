import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Content, HeaderContainer, BodyContainer, FooterContainer } from './styles'
const { bool, func } = PropTypes

class ModalEntry extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    toggleModal: func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state ={
      respectMouse: true,
    };
  }

toggleMouse = () => {
  this.setState({respectMouse: !this.state.respectMouse});
};

toggleModal = () => {
  if(this.state.respectMouse){
     this.props.toggleModal();
  }
};

  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;

  

    

    //on close animation


    return (
      <Container onClick={this.toggleModal}>
        <Content onMouseEnter={this.toggleMouse} onMouseLeave={this.toggleMouse}>
         {this.props.children}
        </Content>
      </Container>
    );
  }
}

export class Header extends Component {
  render() {
    return <HeaderContainer>{this.props.children}</HeaderContainer>;
  }
};

export class Body extends Component {
  render() {
    return <BodyContainer>{this.props.children}</BodyContainer>;
  }
}

export class Footer extends Component {
  render() {
    return <FooterContainer>{this.props.children}</FooterContainer>;
  }
}

export default ModalEntry
