import { Component } from "react";

const scheduler = window.schedulerñ

export default class Scheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'ant',
            'hoy',
            'post'
        ];

        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2023, 10, 15));
        scheduler.clearAll();
        scheduler.parse(events);
    }

    render() {
        return (
            <div 
            ref={ (input) => {this.schedulerContainer = input}} 
            style={ {width: '100%', height: '100%'} } >
            </div>
        );
    }
}