import React from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleFirstBonus = this.handleFirstBonus.bind(this);
    this.handleLastBonus = this.handleLastBonus.bind(this);
    this.handleAllMadeBonus = this.handleAllMadeBonus.bind(this);
    this.state = {
      count: 0,
      total: 0,
      bonus: {
        first: {
          checked: false
        },
        last: {
          checked: false
        },
        allMade: {
          checked: false
        }
      }
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    const stringTotal = localStorage.getItem('total');
    const total = parseInt(stringTotal, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }

    if (!isNaN(total)) {
      this.setState(() => ({ total }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
    if (prevState.total !== this.state.total) {
      localStorage.setItem('total', this.state.total);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        total: prevState.total + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
        total: prevState.total - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
        total: 0
      };
    });
  }
  handleFirstBonus() {
    this.setState((prevState) => {
      console.log(prevState.bonus.first.checked);
      console.log(prevState);
      if (prevState.bonus.first.checked === true) {
        console.log(prevState.bonus.first.checked);
        console.log(prevState);
        return {
          total: prevState.total + 2,
          bonus: {
            first: {
              checked: !(prevState.bonus.first.checked)
            },
            last: {
              checked: (prevState.bonus.last.checked)
            },
            allMade: {
              checked: (prevState.bonus.allMade.checked)
            }
          }
        };
      } else {
        console.log(prevState.bonus.first.checked);
        console.log('text');
        return {
          total: prevState.total - 2,
          bonus: {
            first: {
              checked: !(prevState.bonus.first.checked)
            },
            last: {
              checked: (prevState.bonus.last.checked)
            },
            allMade: {
              checked: (prevState.bonus.allMade.checked)
            }
          }
        };
      }  
    });
  }
  handleLastBonus() {
    this.setState((prevState) => {
      if (prevState.bonus.last.checked === true) {
        return {
          total: prevState.total + 2,
          bonus: {
            first: {
              checked: (prevState.bonus.first.checked)
            },
            last: {
              checked: !(prevState.bonus.last.checked)
            },
            allMade: {
              checked: (prevState.bonus.allMade.checked)
            }
          }
        };
      } else {
        return {
          total: prevState.total - 2,
          bonus: {
            first: {
              checked: (prevState.bonus.first.checked)
            },
            last: {
              checked: !(prevState.bonus.last.checked)
            },
            allMade: {
              checked: (prevState.bonus.allMade.checked)
            }
          }
        };
      }  
    });
  }
  handleAllMadeBonus() {
    this.setState((prevState) => {
      console.log(prevState.bonus.allMade.checked);
      if (prevState.bonus.allMade.checked === true) {
        return {
          total: prevState.total + 2,
          bonus: {
            first: {
              checked: (prevState.bonus.first.checked)
            },
            last: {
              checked: (prevState.bonus.last.checked)
            },
            allMade: {
              checked: !(prevState.bonus.allMade.checked)
            }
          }
          
        };
      } else {
        return {
          total: prevState.total - 2,
          bonus: {
            first: {
              checked: (prevState.bonus.first.checked)
            },
            last: {
              checked: (prevState.bonus.last.checked)
            },
            allMade: {
              checked: !(prevState.bonus.allMade.checked)
            }
          }
        };
      }  
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAddOne}>+1</button>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
        <div>
          <input type="checkbox" checked={this.state.bonus.first.checked} onClick={this.handleFirstBonus} />First make +2 
        </div>
        <div>
          <input type="checkbox" checked={this.state.bonus.last.checked} onClick={this.handleLastBonus} />Last make +2
        </div>
        <div>
          <input type="checkbox" checked={this.state.bonus.allMade.checked} onChange={this.handleAllMadeBonus} />All Made +2
        </div>
        <div>
          <h1>Total: {this.state.total}</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
