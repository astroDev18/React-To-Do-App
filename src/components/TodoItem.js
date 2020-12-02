import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" className="checkbox" onChange={this.props.markComplete.bind
                (this, id)} /> {' '}
                { title }
                <button onClick={  this.props.delTodo.bind(this, id)} style={btnStyle}>
                    <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
                </button>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

const btnStyle = {
    color: '#0D6D64',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;