// import { Component } from 'react';
// import { Overlay, ModalBox, ModalDesc } from './Modal.styled';

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClick();
//     }
//   };

// handleClick = event => {
//   if (event.target === event.currentTarget) {
//     this.props.onClick();
//   }
// };

//   render() {
//     const { largeUrl, tags } = this.props;
//     return (
//       <Overlay class="overlay" onClick={this.handleClick}>
//         <ModalBox class="modal">
//           <img src={largeUrl} alt={tags} />
//           <ModalDesc>{tags}</ModalDesc>
//         </ModalBox>
//       </Overlay>
//     );
//   }
// }
