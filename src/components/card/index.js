import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';

class card extends Component {
    render() {
        return (
            <div>
                <Card
                    hoverable
                    className='card_graf'
                    style={{ borderRadius: '15px' }}
                    title={this.props.title}
                >
                    {this.props.descripcion}
                </Card>
            </div>
        );
    }
}

export default withRouter(card);