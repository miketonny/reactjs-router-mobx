import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('rootStore')
@observer
class Menu extends Component {
    render() {
        return (
          <ul>
              <li><button>Team Summary</button></li>
              <li><button>Wellness/RPE</button></li>
              <li><button>Training Load</button></li>
          </ul>
        );
    }
}

export default Menu;
