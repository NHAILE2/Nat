import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../Action";
import TableRow from "../TableRow/TableRow";
import PropTypes from 'prop-types'
class About extends Component {
    state={
        selectedItem:[]
    }

    UNSAFE_componentWillMount() {
    this.props.getData();
    
  }
  sortData=(val)=>{
      
    //   console.log("About class",val);
    var byTitle = val.slice(0);
      let sorted=byTitle.sort(function(a,b) {     
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
      
    });
     console.log('sorted',sorted);
    
    
  }
  handleTableClick=(e)=>{
    // console.log('Table row is clicked',e);
    this.setState({selectedItem:e})
  }

  render() {
    //  console.log("About class",this.props.posts);

    var byTitle = this.props.posts.slice(0);
      let sorted=byTitle.sort(function(a,b) {     
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
      
    });
     console.log('sorted',sorted);

    //  this.sortData(this.props.posts)
    return (
      <div className="about">
      <div className="about__table1">

        <h1>Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID </th>
              <th>Title </th>
              <th>Complited </th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(item => {
              return <TableRow item={item} key={item.id} handleTableClick={this.handleTableClick}/>;
            })}
            {/* {sorted.map(item => {
              return <TableRow item={item} key={item.id} handleTableClick={this.handleTableClick}/>;
            })} */}
          </tbody>
        </table>
      </div>
      <div className="about__table2">
         
          <form>
               <h3>Selected Item</h3>
              <input value={this.state.selectedItem.id}/>
              <input value={this.state.selectedItem.title}/>
              <input value={this.state.selectedItem.completed}/>
              
          </form>
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items
});

About.propTypes ={
     posts:PropTypes.array.isRequired
}
export default connect(mapStateToProps, { getData })(About);
