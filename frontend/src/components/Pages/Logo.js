import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  import axios from "axios";
  import React, { Component } from 'react'
  import Sideposts from './Sideposts';
  import {toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  toast.configure()
  export class Logo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          activeItem: {
            names: "",
            idno: "",
            message: "",
            mobile: "",
            jobtype: "Logo application",
            datesend: this.handledate(),
          }
      }};
      
      handleChange = (e) => {
        let { name, value } = e.target;
    
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
    
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });    
      };
      refreshList = () => {
        axios
          .get("/api/job/")
          .then((res) => this.setState({ todoList: res.data }))
          .catch((err) => console.log(err));
      };
      handleSubmit = (e) => {
        e.preventDefault();
         
        axios
          .post("/api/job/", this.state.activeItem)
          .then(res => this.setState({ statuss: "success" }),
          this.setState({ names: '' })
          )
    .catch(err => this.setState({ statuss: "error" }));
    window.location.reload();
toast.success('Request sent Succesfully',
{position: toast.POSITION.TOP_CENTER},{autoClose:10000})
    };
    handledate = () => {
      var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      return date;
    }
    render() {
      return (
       
          <div className=" ml-auto pin">
          <div className="row">
            <div className="col col-lg-7 ">
              <h4>Logo</h4>  
              <p>
              
Start by filling your details below and we will call you for further clarifications.
             </p>
             {this.state.statuss === 'error' && (
        <div class="alert alert-danger" role="alert">
        Something went wrong
      </div>
      )}
      {this.state.statuss === 'success' && (
        <div class="alert alert-success" role="alert">
        Data submitted succesfully
      </div>
      )}
              <Form onSubmit={(e)=> this.handleSubmit(e)}>
    <FormGroup>
      <Label>Your Names</Label>
      <Input type="text" placeholder="Enter your names"name="names" onChange={this.handleChange} value={this.state.activeItem.names} required/>
    </FormGroup>
  
    <FormGroup>
      <Label>ID No.</Label>
      <Input type="number" placeholder="Enter ID number" onChange={this.handleChange} name="idno" value={this.state.activeItem.idno} required/>
    
      </FormGroup>
    <FormGroup>
      <Label>Job Description.</Label>
      <textarea className="form-control" placeholder="Describe what you want"name="message" onChange={this.handleChange} value={this.state.activeItem.message} required ></textarea>
    </FormGroup>
    <FormGroup>
      <Label>phone number.</Label>
      <Input type="number" placeholder="Enter your Phone number"name="mobile" onChange={this.handleChange} value={this.state.activeItem.mobile} required />
    </FormGroup>
    <FormGroup>
      
      <Input type="hidden" placeholder="Enter your Phone number"name="jobtype" onChange={this.handleChange} value={this.state.activeItem.jobtype} required />
      </FormGroup>
  <Button color="primary"className="mt-2" type="submit">
      Submit
    </Button>  
    </Form>
    </div>
        <div className="col-lg-5 ">
        <Sideposts/>
        </div>
        </div>
       
        </div>
      )
    }
  }
  
  export default Logo
  