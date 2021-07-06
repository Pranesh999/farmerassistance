import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserList from '../containers/UserList/UserList';
import Chat from '../containers/Chat/Chat';
import Singleton from '../socket';
import MessageType from '../containers/Chat/SendMessage/MessageType';
import img5 from '../images/image33.jpg';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userJoined, userJoinedAck, userLeft, messageReceived } from '../actions/index';
import { bindActionCreators } from 'redux';

class ChatApplication extends Component {
    constructor() {
        super();

        this.state = {
            modalOpen: true,
            usernameInput: ''
        }
    }

    render() {
        const modalActions = [
            <RaisedButton
                label="Choose"
                primary={true}
                onClick={() => this.onChooseName()}
            />
        ];

        const modalStyle = {
            width: '600px'
        };

        const chat = this.state.modalOpen ? '' : <Chat />

        return (
            <MuiThemeProvider>
                <div className="App text-right">
                    <div style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover", marginRight: '-15px', marginLeft: '-15px' }}>
                        <Row>
                            <Col xs='2' style={{ paddingTop: "26px", backgroundColor: 'rgba(250,235,215,0.6)' }}>
                                <Link to={`/farmerHome`}>
                                    <Button variant="info"
                                        type="back" id="btnback"
                                        style={{ paddingLeft: "26px", paddingRight: "26px" }}>
                                        Back</Button>
                                </Link>
                                <UserList users={this.state.users} />
                            </Col>
                            <Col>
                                {chat}
                            </Col>
                            <Dialog
                                title="Choose your name"
                                actions={modalActions}
                                modal={true}
                                open={this.state.modalOpen}
                                contentStyle={modalStyle}>
                                <TextField
                                    autoFocus
                                    hintText="Write your name here..."
                                    value={this.state.usernameInput}
                                    onChange={(event) => this.updateInputValue(event.target.value)}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </Dialog>
                        </Row>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    registerSocket() {
        let self = this;
        this.socket = Singleton.getInstance();

        this.socket.onmessage = (response) => {
            let message = JSON.parse(response.data);
            let users;

            switch (message.type) {
                case MessageType.TEXT_MESSAGE:
                    self.props.messageReceived(message);
                    break;
                case MessageType.USER_JOINED:
                    users = JSON.parse(message.data);
                    self.props.userJoined(users);
                    break;
                case MessageType.USER_LEFT:
                    users = JSON.parse(message.data);
                    self.props.userLeft(users);
                    break;
                case MessageType.USER_JOINED_ACK:
                    let thisUser = message.user;
                    self.props.userJoinedAck(thisUser);
                    break;
                default:
            }
        }

        this.socket.onopen = () => {
            this.sendJoinedMessage();
        }

        window.onbeforeunload = () => {
            let messageDto = JSON.stringify({ user: this.props.thisUser, type: MessageType.USER_LEFT });
            this.socket.send(messageDto);
        }
    }

    sendJoinedMessage() {
        let messageDto = JSON.stringify({ user: this.state.usernameInput, type: MessageType.USER_JOINED });
        this.socket.send(messageDto);
    }

    onChooseName() {
        //Choose button will only work when there will be certain value in textField of username;
        if (this.state.usernameInput.length >= 1) {
            this.registerSocket();
            this.setState({ modalOpen: false });
        }
        else {
            alert("Please enter name to continue");
        }
    }

    updateInputValue(value) {
        this.setState({ usernameInput: value });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onChooseName();
        }
    }
}

function mapStateToProps(state) {
    return {
        messages: state.message,
        users: state.users,
        thisUser: state.thisUser
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        userJoined: userJoined,
        userJoinedAck: userJoinedAck,
        userLeft: userLeft,
        messageReceived: messageReceived
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApplication);
