import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import Message from './components/Message';
import EmployeeAPI from './EmployeeAPI';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isEditForm: false,
            employee: {
                firstName: "",
                lastName: "",
                salary: "",
                job: ""

            },
            message: ""
        };
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);

    }
    componentDidMount() {
        EmployeeAPI.getEmployees().then(data => {
            console.log(data);
            this.setState({ employees: data.response })
        });
    }

    resetForm() {
        this.setState({
            employee: {
                firstName: "",
                lastName: "",
                salary: "",
                job: ""
            }
        });
    }

}