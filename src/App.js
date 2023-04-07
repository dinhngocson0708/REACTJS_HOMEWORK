import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { ReactDOM } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';
// function Member(){
//   return(
//     <div>
//       <p>Name:ĐINH NGỌC SƠN</p>
//       <p>Age:20</p>
//     </div>
//   )
 
// }
// function Avatar(){
//   return(  
//     <div>
//         <img src='https://img.freepik.com/premium-vector/happy-pig-cartoon_160606-374.jpg?w=740'></img>
//     </div>
    
//   )

// }
function Header(){
  return(
    <Container>
    <div class="row">
    <div class="col-sm-2"><img className='logo' src='https://danavtc.edu.vn/Portals/0/logo.png?ver=2019-10-13-182116-600'></img></div>
    <div class="col-sm-7">
          <h1>TRƯỜNG CAO ĐẲNG NGHỀ ĐÀ NẴNG</h1>
            <h4>DANANG VOCATIONAL TRAINING COLLEGE</h4>
            <p><b><ion-icon name="location-outline"></ion-icon>99 Tô Hiến Thành, Sơn Trà, Đà Nẵng</b></p>
            <p><b><ion-icon name="mail-outline"></ion-icon>danavtc@danavtc.edu.vn</b></p>
            <p><b><ion-icon name="call-outline"></ion-icon>02363.942.790 – 02363.940.946</b></p>
    </div>
    <div class="col-sm-3">
      <h5>Đăng nhập | Liên hệ | <img src='https://danavtc.edu.vn/Portals/_default/skins/danavtc/img/icon-en.png'></img>  </h5>
      <div>
     
          <input type={text} class='form-control' placeholder="Search"/>
      
      </div>
    </div>
  </div>
    </Container>
    
  )
}
function Thanhbar(){
  return(
    <div className='thanhbar'>
     <div className='container'>
    
      <div class='container-fluid'>
      <ul class="nav navbar-nav">
        <li class="active"><a href='#'>TRANG CHỦ</a></li>
        <li><a href='#'>GIỚI THIỆU</a></li>
        <li><a href='#'>KHOA-PHÒNG</a></li>
        <li><a href='#'>ĐÀO TẠO</a></li>
        <li><a href='#'>TUYỂN SINH</a></li>
        <li><a href='#'>NGHIÊN CỨU</a></li>
        <li><a href='#'>HOẠT ĐỘNG</a></li>
        <li><a href='#'>NGHIÊN CỨU</a></li>
        <li><a href='#'>LỊCH CÔNG TÁC</a></li>
        <li><a href='#'>SINH VIÊN</a></li>
        <li><a href='#'>ĐOÀN THỂ</a></li>
      </ul>
    </div>

     </div>
      
  
    </div>
    
  )
 
}
function Content(){
  return(
    <img className='imgContent' src='https://danavtc.edu.vn/Portals/0/EasyDNNnews/Uploads/290/ts2023.jpg'></img>
  )
}

function Member(props){
  return(
    <div className='member'>
        <h2>{props.khoa}</h2>
        <p>Lớp:{props.lop}</p>
    </div>
  )
}

class Member_state extends React.Component{
    constructor(props){
      super(props)
      this.state=
      {
        lop:"21PNV1A",
        khoa:"CNTT"
      }
    };
    doikhoa=()=>{
      this.setState({
        lop:"21PNV1B",
        khoa:"CN"
      })
    }
    render(){
      return(
        <div>
          <p>Lop:{this.state.lop}</p>
          <p>Khoa:{this.state.khoa}</p>
          <button type='button'onClick={this.doikhoa}>Thay đổi khoa</button>
        </div>
      )
    }
}
class Dem extends React.Component{
  constructor(props){
    super(props)
    this.state={
       so:0
    }
  };
  tangSo=()=>{
    this.setState(
      {so:this.state.so+1}
    )
  };
  render(){
    return(
      <div>
        <p>Number:{this.state.so}</p>
        <button type='button' onClick={this.tangSo}>Tăng giá trị</button>
      </div>
    )
  }

}

class Chuyenanh extends React.Component{
  constructor(props){
    super(props)
    this.state={
       img:1
    }
  };
  thayAnh=()=>{
    this.setState(
      {img:this.state.img+1}
    )
  };
  render(){
    return(
      <div>
        <img src={`${this.state.img}.jpg`}></img>
        <button type='button' onClick={this.thayAnh}>Thay đổi ảnh</button>
      </div>
    )
  }

}

function App() {
  return (
    <div>
      <h1>
        {/* tổng là {5+5}
        <Member/>
        <Avatar/> */}
        {/* <Header/>
        <Thanhbar/>
        <Content/> */}
      </h1>
      {/* <Member khoa="Khoa CNTT" lop="21pnv1a"/>
      <Member khoa="Khoa CNTT" lop="21pnv1b"/> */}
      <Member_state/>
      <Dem/>
      <Chuyenanh/>
    </div>
    
  );
}

export default App;

