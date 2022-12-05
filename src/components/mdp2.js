import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyDatepickerComponent extends Component {
  //  export const MyDatepickerComponent = () => {


    state = {
        endDate: new Date()
    };

    handleChange = (date, event) => {
        
        this.setState({
            endDate: date
        });

       console.log("END DATE_:" +this.state.endDate);


    };

    render() {

        return (
            <div>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    showYearDropdown
                    dateFormat="MM/dd/yyyy EE  hh:mm a"
                />
            </div>
        )
    };
}

export default MyDatepickerComponent;
 