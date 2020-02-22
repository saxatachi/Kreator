import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead,getLeads } from '../actions/leads'
export  class Form extends Component {
    state= {
        name: '',
        training: '',
    }
    static propTypes = {
        addLead: PropTypes.func.isRequired
    }
    onChange = e =>this.setState({
        [e.target.name]: e.target.value
    });
    onSubmit = e =>{
        e.preventDefault();
        const {name,training}=this.state;
        const lead={name,training};
        this.props.addLead(lead);
    }
    render() {
        const {name,training} = this.state;
        return (
            <div>
                <h1>JEbac disa</h1>
                <form onSubmit={this.onSubmit}>
                    <div >
                        <label>Nazwa</label>
                        <input 
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                            />
                    </div>
                    <div>
                        <label>Trening</label>
                        <input 
                            type="text"
                            name="training"
                            onChange={this.onChange}
                            value={training} />
                    </div>
                    
                    <input type="submit" value="Dodaj"/>
                    
                    </form>
            </div>
        )
    }
}
export default connect(null,{addLead})(Form);
