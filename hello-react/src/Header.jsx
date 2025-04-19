import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      judul : 'ini judul dari state', 
      dataMakanan  : this.props.list
    }

    this.handlePesan = this.handlePesan.bind(this)
  }
  handlePesan(pesan, e){
    e.preventDefault()
    alert(pesan)
    alert("Hai")
  }

    render(){
      return(
        <div>
        <h2>Ini Makanan Khas Indonesia</h2>
        <h3>{this.state.judul}</h3>
        <p>Mengakses props dari App secara langsung : {this.props.list}</p>
        <p>Mengakses props dari state : {this.state.dataMakanan}</p>
        <a href="/" onClick={(e) => this.handlePesan("ini dari parameter", e)}>Halaman Header</a>
        </div>
      );
    }
  }

// Export Component
export default Header;

