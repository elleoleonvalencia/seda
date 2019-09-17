import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

class card extends Component {
    render() {
        return (
            <div>
                <Card
                    hoverable
                    className='card__three'
                    style={{ width: 350, borderRadius: '15px' }}
                    cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={this.props.fotos} />}
                    onClick={()=>this.props.kk()}
                >
                    <Meta title={this.props.title} description={this.props.descripcion} />
                </Card>
            </div>
        );
    }
}

export default withRouter(card);