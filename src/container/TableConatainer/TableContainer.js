import React, { Component } from "react";
import TableBody from "../../component/TableBody/TableBody";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
class TableContainer extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    return (
      <div>
        <TableBody></TableBody>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(actions.users())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
