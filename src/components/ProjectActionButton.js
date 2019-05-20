import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

class ProjectActionButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const {identifier} = this.props;

    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="light">
            <FontAwesomeIcon icon={faEllipsisV} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>สร้าง</DropdownItem>
          <DropdownItem tag={Link} to={`/projects/${identifier}/docs/1/create`}>แบบเสนอโครงการ</DropdownItem>
          <DropdownItem disabled>แบบสรุปโครงการ</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default ProjectActionButton;