import React, {Component} from 'react';

class Counter extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         number: 0,
    //     }
    // }

    state = {
        number: 0,
    };

    tambah = () => {
        this.setState({number: this.state.number + 1})
    }

    kurang = () => {
        this.state.number <1 
        ? this.setState({number: 0}) 
        : this.setState({number: this.state.number - 1});
    }
    
    render () {
        return(
            <div>
                <p>{this.props.title}</p>
                <p>Komponen ini sudah diklik sebanyak {this.state.number} kali</p>
                <button onClick={this.tambah}>Tambah</button>
                <button onClick={this.kurang}>Kurang</button>
            </div>
        )
    }
}

export default Counter;