import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';

class breadcrumb extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ paddingLeft: '150px', paddingBottom: '20px' }}>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                        <span>Home</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default withRouter(breadcrumb);