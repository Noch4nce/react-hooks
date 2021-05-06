import React from 'react';
import styles from './UseEffectHook.module.css';

// function UseEffectHook() {
//   const [numbers, setNumbers] = React.useState([1, 2, 3]);

//   const handleAdd = () => {
//     setNumbers([...numbers, ++numbers.length]);
//   };

//   return (
//     <div>
//       <ul className={`wrapper ${styles.wrapper}`}>
//         {numbers.map((el, index) => {
//           return <li key={index}>{el}</li>;
//         })}
//       </ul>
//       <button onClick={handleAdd} className={styles.button}>
//         ADD
//       </button>
//     </div>
//   );
// }

// export default UseEffectHook;

// class version
export class UseEffectHook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [1, 2, 3],
    };
  }

  componentDidMount() {
    console.log('Component was displayed');
  }

  componentDidUpdate(prevState) {
    if (prevState.length !== this.state.numbers.length) {
      console.log("Component did update");
    }
  }

  componentWillUnmount () {
    console.log("Component will unmount");
  }

  handleAdd = () => {
    this.setState({
      numbers: [...this.state.numbers, ++this.state.numbers.length],
    });
  };

  handleHide = () => {
    this.props.onVisible(false)
  }

  render() {
    return (
      <div>
        <ul className={`wrapper ${styles.wrapper}`}>
          {this.state.numbers.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
        <button onClick={() => this.handleAdd()} className={styles.button}>
          ADD
        </button>
      </div>
    );
  }
}

export default UseEffectHook;
